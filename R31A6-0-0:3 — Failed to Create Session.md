
**Symptoms:**
You try to start a multiplayer session, host or join an online quest, and get the error "Failed to create session. R31A6-0-0:3."

**Cause:**
A networking issue. The game can't establish a stable connection to the multiplayer servers. This is usually related to region, NAT type, or IPv6 routing.

**Prerequisite:** Check if the servers are actually down.
Before troubleshooting your own network, check the official Monster Hunter status account at [@MHStatusUpdates ](https://x.com/mhstatusupdates). If they are reporting a widespread outage or maintenance, the issue is on Capcom's end and no local fix will work. Wait for the servers to come back online.

### **General Fixes (try in order):**

**1. Restart your router.** Turn it off, wait 30 seconds (so it fully powers down and clears cached connections), then turn it back on.

**2. Check your NAT type.** 1 (Full Cone NAT) or 2 (Restricted Cone NAT/Port Restricted Cone NAT) is fine. 3 (Symmetric NAT) may interfere with multiplayer connectivity. To do so:

**PlayStation:** Settings → Network → View Connection Status → NAT Type.

**Xbox:** Settings → General → Network settings → Test NAT type.

**PC:** Visit https://www.checkmynat.com/ and click Detect NAT. If it shows you Symmetric NAT, that's type 3, and may handicap multiplayer connectivity. You can remedy this by accessing your router's admin page. Learn how in [How to Access your Router's Admin Page](How%20to%20Access%20your%20Router's%20Admin%20Page.md).

After you enter your router's admin page, you will have to find Universal Plug and Play (UPnP,) which is usually found under sections such as "NAT," "Port Forwarding," or "Advanced," and enabling it.

**Note:** While a possible fix, UPnP has a known security trade-off. It lets devices on your network open ports automatically. For most home users, the difference is negligible. If you're security-conscious or on a shared network, you can skip UPnP and manually forward the ports instead. To manually forward the ports, visit [Manual Port Forwarding](Manual%20Port%20Forwarding.md).

If your NAT type is 1 or 2, or you enabled UPnP or manually forwarded the ports and the problem persists, continue reading.

**3. Disable IPv6.** Some networks may have IPv6 routing problems that do not affect IPv4. Disabling IPv6 forces the device to use IPv4 instead. This has no bearing on latency or lag.

On **PC:**

- Win + R
- Type "ncpa.cpl" and press Enter
- Find your active Wi-Fi/Ethernet adapter. 
- Right click it and press Properties
- Find "Internet Protocol Version 6 (TCP/IPv6)"
- Uncheck it and click OK

On **Playstation and Xbox:**

You will have to disable IPv6 through your router's admin page. To learn how, visit [How to Disable IPv6 for Consoles](How%20to%20Disable%20IPv6%20for%20Consoles.md). If you wish to try other steps first, continue reading.

**4. Disable Crossplay.** This is especially relevant in certain countries with regional restrictions or limitations, but means losing the ability to play with different platform users. In Monster Hunter Wilds, this will also mean that you can only play with those who have their own Crossplay setting disabled.

To disable it:

- Navigate to Title Screen
- Select Options
- Open Game Settings
- Find Crossplay
- Set it to Disable

If you need Crossplay on, continue reading.

### **Regional Workaround:**

**1. Use a Virtual Private Network (VPN).** Some countries, like Egypt, encounter this error due to regional limitations. Cloudflare WARP changes the network path without forcing routing through a distant server, which may add high latency. 

