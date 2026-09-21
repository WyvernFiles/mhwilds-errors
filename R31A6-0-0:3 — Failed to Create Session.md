
Symptoms:
You try to start a multiplayer session and get the error "Failed to create session. R31A6-0-0:3." The session doesn't start.

Cause:
A networking issue. The game can't establish a stable connection to the multiplayer servers. This is usually related to region, NAT type, or IPv6 routing.

Prerequisite: Check if the servers are actually down.
Before troubleshooting your own network, check the official Monster Hunter status account at [@MHStatusUpdates ](https://x.com/mhstatusupdates). If they are reporting a widespread outage or maintenance, the issue is on Capcom's end and no local fix will work. Wait for the servers to come back online.

Note: This error is reported by players worldwide, but players in some countries such as Egypt hit it due to regional network restrictions. If you suspect this applies to you, check the Regional Fixes section at the bottom of this page.

General Fixes (try in order):

1. Restart your router. Turn it off, wait 30 seconds (so it fully powers down and clears cached connections), then turn it back on.

2. Check your NAT type. 1 (Full Cone NAT) or 2 (Restricted Cone NAT/Port Restricted Cone NAT) is fine. 3 (Symmetric NAT) is strict. To do so:

PlayStation: Settings → Network → View Connection Status → NAT Type.

Xbox: Settings → General → Network settings → Test NAT type.

PC: Visit https://www.checkmynat.com/ and click Detect NAT. If it shows you Symmetric NAT, that's type 3, and is severely limiting. You can remedy this by accessing your admin router page (you'll need your router's credentials, usually found on the router itself,) finding Universal Plug and Play (UPnP,) usually found under sections such as "NAT," "Port Fowarding," or "Advanced," and enabling it.

Note: While a possible fix, UPnP has a known security trade-off. It lets devices on your network open ports automatically. For most home users, the difference is negligible. If you're security-conscious or on a shared network, you can skip UPnP and manually forward the ports instead. To manually forward the ports, visit [Manual Port Forwarding](Manual%20Port%20Forwarding.md).


