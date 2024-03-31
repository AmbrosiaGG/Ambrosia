#!/bin/bash

# Function to get server information
get_server_info() {
  os=$(uname -s)
  kernel=$(uname -r)
  cpu_temp=$(<"/sys/class/thermal/thermal_zone0/temp")  # Might vary based on system
  cpu_usage=$(top -b -n1 | grep '%Cpu(s):' | awk '{print $2 + $4}')  # Parses top output
  mem_usage=$(free -m | awk '/Mem:/ {print $3}')
  disk_usage=$(df -h / | awk '/\// {print $5}')
  uptime=$(uptime -p)
}

# Function to build JSON data
build_json() {
  cat <<EOF | jq -r .  # Use jq to format JSON (optional)
  {
    "os": "$os",
    "kernel": "$kernel",
    "cpu_temp": "$cpu_temp",
    "cpu_usage": "$cpu_usage%",
    "mem_usage": "$mem_usage MB",
    "disk_usage": "$disk_usage",
    "uptime": "$uptime"
  }
EOF
}

# Process arguments with getopt (replace with your preferred argument parsing)
#  -u: URL of the server (optional)
#  -h: Display help message
usage() {
  echo "Usage: $0 [-u server_url]" >&2
  exit 1
}

while getopts ":u:h" opt; do
  case $opt in
    agent) AGENT_ID="$OPTARG" ;;
    h) usage ;;
    \?) usage ;;
  esac
done

# Shift arguments to remove processed options (if using getopt)
shift $((OPTIND-1))

# Check if server URL is provided or use a default value (optional)
if [[ -z "$AGENT_ID" ]]; then
  echo "Agent ID not provided"
  exit
fi
SERVER_URL="https://your-server.com/api/endpoint"
while true; do
  # Get server information
  get_server_info

  # Build JSON data
  json_data=$(build_json)

  # Send POST request with JSON data using curl
  curl -X POST -H "Content-Type: application/json" -d "$json_data" "$SERVER_URL"

  # Check for curl errors (exit code != 0)
  if [[ $? -ne 0 ]]; then
    echo "Error sending JSON request!" >&2
  fi

  # Sleep for 5 minutes (300 seconds)
  sleep 300
done
