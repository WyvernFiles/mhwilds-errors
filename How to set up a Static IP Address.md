
### **Static IP Setup (Required Before Port Forwarding)**

A static IP address is required for port forwarding to work, as a dynamic IP address may simply change the IP, breaking the port forwarding.

To set up a static IP address:

**On Playstation:**

- Go to Settings
- Go to Network - View Connection Status
- Take note of your IP Address, MAC Address, and Gateway

**On Xbox Series X|S / Xbox One:**

- Press the Xbox button to open the guide
- Go to Profile & system > Settings > General > Network settings
- Select Advanced settings
- Take note of your IP address, MAC address (also called Wireless MAC Address or Ethernet MAC Address,) and Gateway

**On PC (Windows):**

- Press Win + R
- Type "cmd" and press Enter
- Type ipconfig /all and press Enter
- Find your active adapter (Ethernet or Wi-Fi)
- Take note of your IPv4 Address, Physical Address (this is your MAC Address,) and Default Gateway
  
Then, you will need to **log into your router.** To learn how, visit [How to Access your Router's Admin Page](How%20to%20Access%20your%20Router's%20Admin%20Page.md)

After you log into your router's admin page, you will need to **find the "Create DHCP Reservation" function.** It is usually found in the following tabs, or ones similarly named:

- LAN
- Address/DHCP Reservation
- Manually Assigned IP
- Static DHCP
- DHCP Static Leases
- Reserved IP

After you find "Create DHCP Reservation":

- Press it
- Add your device's MAC and IP Address when prompted
- Save changes

Now, you should have reserved a static IP address for your device, while leaving its own network settings automatic and reliable. Return to [Manual Port Forwarding](Manual%20Port%20Forwarding.md) and continue reading to learn how to **open the specific ports Capcom's servers need.**
