const dayjs = require("dayjs");
const express = require("express");
const fs = require("fs");
const passwordgen = require("../utilities/password_gen");
const Jimp = require("jimp");
const os = require('os')
const axios = require('axios')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
//import chalk from "chalk";

/* Schemas */
const monitordat = require("../mongoose/schema/monitor_data.js");
const UptimeArray = require("../mongoose/schema/uptime_array");
const User = require("../mongoose/schema/user");
const hostsettings = require("../mongoose/schema/hostconfiguration");
const db = require("../utilities/quickmongo.js");
/*
// Deprecate the Cloudflare package, Use Ambrosia-CF
import Cloudflare from 'cloudflare'; 
const cloudflare = new Cloudflare({
  apiEmail: process.env.cloudflare_email, // This is the default and can be omitted
  apiKey: process.env.cloudflare_key, // This is the default and can be omitted
});
*/
const ambrosiacf = require('../sister_packages/AmbrosiaCF/index')
const cf = new ambrosiacf({ apikey: process.env.cloudflare_key })



const router = express.Router();

/*
router.post('/token', async (req, res) => {
    if (!req.body.username) {
      res.json({ title: "Error", description: "No Data To Check Against DTCA", icon: "error" })
    } else {
      const userdata = await User.findOne(req.body.username) 
      if (!await userdata) {
        res.json({ title: "Error", description: "No user found", icon: "error" })
      } else {
        if (userdata.password != req.body.password) {
          res.json({ title: "Error", description: "Incorrect Data", icon: "error" })
        } else {
          
        }
    }
  }
})
*/

router.post('/domains/new_subdomain', async (req, res) => {
  if (req.session) {
    let usersd = await User.findOne(req.session.username)
    if (!await usersd) {
      if (await usersd.password == req.session.not_listd) {
        if (usersd.plan == "Free" || usersd.plan == "Pro" || usersd.plan == "Business" || usersd.plan == "Enterprise" || usersd) {
          const config = {
            dictionaries: [adjectives, colors, animals],
            separator: ''
          };
          const domain = `${uniqueNamesGenerator(config)}.${process.env.subdomain_system_domain}`
          cf.dnsRecordAdd(process.env.subdomain_system_cf_zoneid, "novabot.eu.org", domain, true, "CNAME", 3360)
          res.status(200).json({
            message: "Success! Successfully created the subdoman! Domain is: " + domain,
            title: "Success",
            icon: "success",
          });
          const subdomains = await User.findOneAndUpdate({ name: req.session.username }, {
            subdomains: {
              domain: domain,
              custom: false,
            }
          }, {
            returnOriginal: false
          });
        }
      } else {
        res.json({ icon: "error", message: "Error USR CREDENTIALS", title: "Error" })
      }
    } else {
      res.json({ icon: "error", message: "Error USR NOT FOUND 404", title: "Error" })
    }
  } else {
    res.json({ icon: "error", message: "No Session", title: "Error" })
  }
})

/*
router.post("/monitor/:name/info", async (req, res) => {
  let data = require("../mongoose/schema/uptime_array.js")
  res.json(data)
});
*/



router.post("/monitor/:name/history", async (req, res) => {
  if (req.session) {
    let usersd = await User.findOne(req.session.username)
    if (!await usersd) {
      if (await usersd.password == req.session.not_listd) {
        const md = require('../mongoose/schema/monitor_data')
        const ua = await UptimeArray.findOne({ name: req.params.name })
        if (await md.ownedby != req.session.username) {
          res.status(403).json({ error: 'No Access To Resource' })
        } else {
          return await ua.data
        }
      } else {
        res.status(401).json({ icon: "error", message: "Error USR CREDENTIALS", title: "Error" })
      }
    } else {
      res.status(401).json({ icon: "error", message: "Error USR NOT FOUND 404", title: "Error" })
    }
  } else {
    res.status(401)({ icon: "error", message: "No Session", title: "Error" })
  }
});


router.post("/admin/monitor/add", async (req, res) => {
  if (req.session) {
    let usersd = await User.findOne(req.session.username)
    if (!await usersd) {
      if (await usersd.password == req.session.not_listd) {
        //
        const userdata = User.findOne({ name: req.session.username })
        const ua = new UptimeArray({
          name: req.body.name,
          status: [],
          ownedby: req.session.username,
        });
        const md = new monitordat({
          name: req.body.name,
          monitorurl: req.body.monurl,
          type: req.body.type, // HTTP, TCP, UDP
          tsc: dayjs().format("MMMM D, YYYY h:mm A"), // Time Since Creation,
          uptime: 0, // HOW THE FUCK DO I CALCULATE THAT... Wait i am just stupid
          downtime: 0, // 0 Cause no data? https://a.pinatafarm.com/320x349/4889604c7b/megamind-no-b.jpg
          tls: req.body.tlscb,
          intrvl: req.body.int
        });
        ua.save();
        md.save();
        await userdata.updateOne(
          { name: req.session.username },
          { $push: { inbox: { type: "success", discription: "Created monitor!", closed: false, cid: passwordgen(6) } } }
        );
        res.status(200).json({
          message: "Success! Successfully created the monitor",
          title: "Success",
          icon: "success",
        });
        //
      } else {
        res.status(401).json({ icon: "error", message: "Error USR CREDENTIALS", title: "Error" })
      }
    } else {
      res.status(401).json({ icon: "error", message: "Error USR NOT FOUND 404", title: "Error" })
    }
  } else {
    res.status(401)({ icon: "error", message: "No Session", title: "Error" })
  }
});


router.post("/admin/user/add", async (req, res) => {
  try {
    if (req.session.username && req.session.role) {
      const rsu = req.session.username;
      const userdata = await User.findOne({ name: rsu });

      if (userdata.role === "Admin" || "Owner") {
        const usr = await User.findOne({ name: req.body.name });

        if (!usr) {
          let pass = passwordgen(6); // Make sure passwordgen function works
          const newusr = new User({
            name: req.body.name,
            role: req.body.role, // Assuming you intended to set role based on req.body
            password: pass,
            avatar: `${process.env.FQDN}/assets/default_pfp.jpeg`,
            inbox: [],
          });

          await newusr.save();
          await User.updateOne(
            { name: req.session.username },
            {
              $push: {
                inbox: {
                  type: "success",
                  discription: "New user created! Password is: " + pass,
                  closed: false,
                  cid: passwordgen(6)
                },
              },
            }
          );
          res.json({
            title: "Success!",
            description: " Successfully created the user " + pass,
            icon: "success",
          });
        } else {
          await User.updateOne(
            { name: req.session.username },
            {
              $push: {
                inbox: {
                  type: "error",
                  discription: "That username is in use",
                  closed: false,
                  cid: passwordgen(6)
                },
              },
            }
          );
          res.json({
            icon: "error",
            title: "Oops!",
            description: "That username is already in use!",
          });
        }
      } else {
        res.json({
          icon: "error",
          title: "Oops!",
          description: "You don't have permission to do that!",
        });
      }
    } else {
      res.json({
        icon: "error",
        title: "Oops!",
        description: "Authentication error or missing session data!",
      });
    }
  } catch (error) {
    console.error("Error in /admin/user/add:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/login", async (req, res) => {
  const userdata = await User.findOne({ name: req.body.name });
  if (!userdata) {
    res.json({
      title: "No user",
      discription: "No user with that password and name",
      icon: "error",
    });
  } else {
    if (req.body.password == userdata.password) {
      req.session.username = userdata.name;
      req.session.not_listd = userdata.password;
      req.session.role = userdata.role;

      await User.updateOne(
        { name: req.session.username },
        {
          $push: {
            inbox: {
              type: "success",
              discription: "Logged In! ",
              closed: false,
              cid: passwordgen(6)
            },
          },
        }
      );
      res.json({
        title: "Success",
        discription: "Logged in",
        icon: "success",
      });
    } else {
      res.json({
        title: "Incorrect Credentials",
        discription: "Invalid credentials",
        icon: "error",
      });
    }
  }
});

router.post("/smartwiz/setup", async (req, res) => {

  const newUser = new User({
    name: req.body.name,
    role: "Owner",
    password: req.body.password,
    avatar: `${process.env.FQDN}/assets/default_pfp.jpeg`,
    inbox: [{ type: "success", description: "s!", closed: false, cid: passwordgen(6) }],
  });
  newUser.save();
  if (req.body.licensekey) {
    axios.post('http://localhost:3344/fetch', { license: req.body.licensekey }).then((response) => {

      if (response.data.msg.msg == "License Key Doesnt Exist!" || response.data.msg.msg == "License Key Used!") {
        const hostconfis = new hostsettings({
          name: "Ambrosia",
          license: "license+error",
          activated: false,
          setuped: true,
        });
        hostconfis.save();
      } else if (response.data.msg.msg == "License Key Usable!") {
        const hostconfis = new hostsettings({
          name: "Ambrosia",
          license: req.body.licensekey,
          activated: true,
          setuped: true,
        });
        hostconfis.save();
      }
    })
  } else if (req.body.licensekey == "no_key") {
    const hostconfis = new hostsettings({
      name: "Ambrosia",
      license: "no_key",
      setuped: true,
    });
    hostconfis.save();
  } else {
    const hostconfis = new hostsettings({
      name: "Ambrosia",
      license: "no_key",
      setuped: true,
    });
    hostconfis.save();
  }
  res.json({
    title: "Success!",
    description: "Success! Ambrosias Setup!",
    icon: "success",
  });
})



// Save user and hostconfig data


// Respond with a success message


/* Shitty Code For Avatar */
router.get("/user/avatar/:btoa", async (req, res) => {
  res.sendFile("../avatars/" + btoa(username) + ".png");
});

router.post("/edit_user", async (req, res) => {
  if (req.session.not_listd) {
    const { username, profile, password } = req.body;
    const userdata = await User.find();
    const changedata = User.findById(userdata._id);
    req.files.foo.mv("../avatars/" + btoa(username) + ".png");
    /*if (req.files.avatar.mimetype != "image/png") {
    Jimp.read()
      .then((image) => {
        // Save the image as a PNG file
        const outputPath = "output_image.png"; // Replace with the desired output path
        return image.write(outputPath);
      })
      .then(() => {
        console.log("Image converted to PNG successfully.");
      })
      .catch((err) => {
        console.error("Error converting image:", err);
      });
  }*/
    changedata.set({
      name: username,
      role: req.session.role, // Owner/Admin/User
      password: password,
      avatar: `${process.env.FQDN}/api/user/avatar/` + btoa(username),
    });
    changedata.save();
    userdata.updateOne(
      { _id: userdata._id },
      { $push: { inbox: { type: "success", discription: "Modified Account", closed: false, cid: passwordgen(6) } } }
    );
    res.json({
      title: "Success!",
      description: "Changed user",
      icon: "Success",
    });
  } else {
    res.json({
      title: "Oops!",
      description: "Whaaa? What are you even doing?",
      icon: "error",
    });
  }
});

router.post("/inbox/delete/", async (req, res) => {
  if (!req.session) {
    res.json({
      title: "Oops!",
      description: "Whaaa? What are you even doing?",
      icon: "error",
    });
  } else {
    const user = require('../mongoose/schema/user.js')
    const ud = await user.findOne({ name: req.session.username })
    await ud.deleteOne({ cid: req.body.cid })
    res.json({
      title: "Success?",
      description: "Wait what? I worked?",
      icon: "success",
    });
  }
})



router.get('/download/agent/:Domain', () => {
  if (req.params.Domain) {

  }
})

module.exports = router;
