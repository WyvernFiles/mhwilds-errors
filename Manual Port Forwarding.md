
**What is a Port?**

A network port is a number that identifies one side of a connection between two computers. Computers use port numbers to determine to which process or application a message should be delivered. Routers block most ports by default for security purposes. If a port is blocked, messages cannot be delivered.

**What is Port Forwarding?**

Port Forwarding is an instruction set on your router that tells it to send incoming traffic on a specific port to a specific device on your network.

**What is Manual Port Forwarding?**

A port is a window. If closed, it can be manually opened to let traffic through. This is a more nuanced, albeit more secure alternative than enabling UPnP.

**Prerequisite:**

Before you manually forward ports, your device needs a static IP address. Otherwise, a dynamic IP address may assign a new IP address later, breaking your port forwarding rules. To learn how to set up a static IP address, visit [How to set up a Static IP Address](How%20to%20set%20up%20a%20Static%20IP%20Address.md). If you already have one set up, continue reading.

**How do you manually forward ports?**

Usually, UPnP handles Port Forwarding automatically. If you wish to avoid it, or if it is unavailable or doesn't work. You will have to manually open specific ports to the game's servers to allow a stable connection. This is done by accessing your router's admin page. You will need your router's username and password, usually found on a sticker on the router itself, and your router's Gateway. If you don't know how to find your Gateway or your router's admin page, visit [How to set up a Static IP Address.md](How%20to%20set%20up%20a%20Static%20IP%20Address.md)

In your router's admin page, the names vary based on brand. You will need to find the function which allows you to manually open ports. Look for keywords such as :

- Port Forwarding
- NAT
- Virtual Server
- Advanced Settings

In such sections, to manually open a port, the option to do so may be called:

- Add Rule
- Create New
- New Entry
- Add Service
- Enable
- Insert

After which you will have to fill the fields with specific port information:

- Service Name: Give it a name you can easily recognize (i.e MHWilds)
- IP Address: Enter your device's Static IP Address or, preferably, the one you reserved previously in your router settings
- Protocol: Select Both (TCP & UDP.) If your router forces a choice, create two rules: one for TCP, one for UDP.
- Port Range: Enter the ports listed on the [official Capcom page.](https://www.monsterhunter.com/support/wilds/faq/detail/041) If it's a range (e.g., 3478-3480), use the hyphen. If it's a single port, just type the number.

**Security Note:** In the official page, The UDP range required for all platforms is considerably massive. Opening such a wide-range of ports is a low-priority concern on a secure, private network. However, in shared networks with many other devices like a campus, it creates more opportunities for threats if said devices were infected.
