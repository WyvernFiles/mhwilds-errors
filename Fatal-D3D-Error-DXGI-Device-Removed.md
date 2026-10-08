### **Briefing:** 
At some point while launching the game or playing it, it suddenly crashes with the error noting a "GPU Crash".

### **Likely Cause:**
Frame Generation, corrupted shader caches, incompatible drivers, external overlays and recorders, outdated BIOS versions, or GPU overclocking.

**Note for Intel CPUs (13th/14th Gen only):** While this error is GPU-related, some of these CPUs come with a manufacturing defect that has a known root cause which may cause this exact error. Before reading below, if you own such CPUs, you may try the fixes in [Intel 13th & 14th Gen CPUs Solution and Workaround](https://github.com/WyvernFiles/mhwilds-errors/blob/main/Intel%2013th%20%26%2014th%20Gen%20CPUs%20Solution%20and%20Workaround.md) first.
## General Fixes (try in order):
### **1. Disable Frame Generation.** 
The game may be sensitive to Frame Gen features on certain GPUs. We will first try disabling Frame Generation in both Monster Hunter Wilds and your GPU's software to ensure it does not override the in-game setting.

**Disabling Frame Generation in-game:** 

- Open the Settings menu
- Navigate to the Graphics tab
- Look for the Frame Generation toggle and turn it off

**Note:** Some have reported that disabling the in-game Frame Gen toggle has no effect. If this is your case, you can disable Frame Gen by force through editing the game's configuration file:

- Open Steam and go to Library
- Right click Monster Hunter Wilds, go to Manage, then Browse Local Files
- Find the file named "config" or "config.ini" and open it
- Inside, find the line that says "FrameGenerationMode" (In Notepad, you can go to Edit, then Find, then enter "framegeneration" to immediately find the line)
- If it's not set to Off, rewrite it to: "FrameGenerationMode=Off"
- Go to File, then Save

**Through NVIDIA App:**

- Go to Graphics and select Monster Hunter Wilds
- Look for a setting called DLSS Override - Frame Generation mode
- Set it to Off

**Through AMD Software: Adrenalin Edition:**

- Go to the Gaming tab and select Monster Hunter Wilds
- Find the setting for AMD Fluid Motion Frames. Set to Disabled
- Check the Global Graphics settings and make sure AFMF (AMD Fluid Motion Frames) is not enabled system-wide

After disabling Frame Generation, try launching the game. If crashes persist, continue reading.

### **2. Disable Overlays and Recorders.** 
If you have an overlay on, such as Steam's or Discord's, or a recorder like NVIDIA's Shadowplay, try turning them off. Such software interferes technically with games, and may break things.

- **Steam Overlay:** Open Steam - Settings - In Game - Ensure "Enable the Steam Overlay" is unchecked

**Note:** You can disable the steam overlay per-game instead through entering your library, right clicking the game, selecting Properties, and then unchecking the setting.
  
- **Discord Overlay:** Open Discord - Click the gear icon (User Settings) next to your name - Scroll down to Activity Settings, then Game Overlay - Ensure "Enable in-game overlay" is toggled off

- **Xbox Game Bar:** Open Windows Settings (Win + I) - Navigate to Gaming, then Game Bar, and turn it off

- **ShadowPlay:** Open NVIDIA App - Settings - Ensure "NVIDIA Overlay" is off

- **AMD ReLive:** Open Adrenalin - Settings - Preferences - Ensure "In-Game Overlay" is off

### **3. Verify Game Files, then Delete shader.cache2 File.** 
A GPU crash can occur due to things like a corrupted shader cache file. If a GPU driver update changed how shaders are compiled, an old cache would be incompatible, for example. If the game tries to read this corrupted data, it may crash.

- Open Steam and go to your Library
- Right click the game - Properties - Installed Files - "Verify integrity of game files"

Afterwards, delete your shader.cache2 file:

- From your Steam's Library, right click the game - Manage - Browse Local Files
- Find and delete "shader.cache2"
- You may also delete your "config.ini" file, though this will reset your game's current settings, and is a low-confidence fix

### **4. Check and Adjust your GPU Driver.** 
Some GPU driver versions are more or less stable than others when it comes to Wilds. Note that when it comes to uninstalling a GPU driver, it is recommended to use Display Driver Uninstaller (DDU) to perform a clean uninstall, as manually uninstalling a driver may leave residual files that can interfere with newly installed drivers. To learn how to use DDU, visit the developer's [official guide](https://www.wagnardsoft.com/content/How-use-Display-Driver-Uninstaller-DDU-Guide-Tutorial).

If you recently updated your driver and then crashes occurred, roll back to the previous version. If you're using an older driver and still crashing, consider updating to the latest version. **For AMD Users:** If you are on **driver 25.10.2 or newer**, these are known to be problematic for Wilds. Try rolling back to [25.9.2](https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-25-9-2.html).

### **5. Update your BIOS.**
First, you must find your motherboard's manufacturer and specific product.

On Windows:

- On your PC, search for "System Information"
- If you're on a desktop: note your "BaseBoard Manufacturer", "BaseBoard Product", and "BaseBoard Version" if present. If you're on a laptop: note your "System Manufacturer" and "System Model"
- Search the internet for your manufacturer's official support page
- Enter the support page - Find the BIOS section - Download your system's latest BIOS version and follow the installation instructions. Be careful not to interrupt installation

If a BIOS update does not resolve the crash, continue reading.

### **6. Check and Adjust your GPU's Clock and Volt settings (Advanced).**

Overclocking and overvolting may lead to a GPU crash error, and so can underclocking and undervolting. However, a modest undervolt/clock may actually fix said crashes. First, if you changed any of these settings in your GPU, revert to default values and retry playing the game. If you never touched those settings, or reverting did not work, continue reading.

- First, to configure GPU settings, download the Final version of [MSI Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards)
- During installation, you will usually be offered to install both MSI Afterburner and RivaTuner Statistics Server. The latter is optional. It shows GPU clock speed, temperature, power, other information, and is used for monitoring
- Open MSI Afterburner

**Prerequisite:** MSI Afterburner has many skins, not all show full functionality. To change the skin, find the settings button - Navigate to User Interface tab - Under "User interface skinning properties", ensure the skin is set to **"Default MSI Afterburner v2 skin"**, as this is the skin the guide assumes. You may change this after to your preference. Also, bottom left of the interface, **uncheck 'Apply overclocking at system startup' for now**. Bottom right of the interface, you can click Reset to undo any previously applied changes to your GPU.

- Beginning with clock reduction, find the "Core Clock (MHz)" slider, and lower it by -100 MHz, but do not save yet
- Click apply, then try launching and playing the game

If this reduction stops the crashes for a full session or two, you may save the change. Click the Save button, then click one of the flashing profile numbers. Check "Apply overclocking at system startup", then navigate to settings, and ensure "Start with Windows" is enabled. Now, Afterburner will automatically launch by itself when you boot your PC, and immediately apply the saved profile by itself

- If the reduction does not stop the crashes, further reduce Core Clock by -150MHz, and try again. If the crashes persist, you may try -200MHz
- If the game continues to crash after a -200MHz decrease, reset the changes, and continue reading to try undervolting.

**Undervolting** is reducing the voltage supplied to your GPU. This reduces generated heat, which means less risk of hardware throttling due to high temperatures and quieter fans. Undervolting may cause instability if pushed too far. There are reports of undervolting fixing GPU crash errors in Wilds.

- First, you must find your GPU's boost clock speed. Using a browser, search for your GPU model's specified boost clock value in MHz (i.e. RTX 5060 Boost Clock = nearly 2500MHz)
- Open MSI Afterburner and ensure it's reset to default values
- Press CTRL + F to open the Voltage/Frequency Curve Editor
- You will see many square-shaped points. The Y axis corresponds to clock speed (MHz), and the X axis corresponds to Voltage (mV). Find the point closest to your GPU's boost clock speed, and if possible, move it as close as you can to it. This is your original point
- Next, lower your original point's voltage by moving it to the left, lowering the voltage up to -50 from its default value
- Move all points sitting right of the original point so that they sit at the exact same clock speed as the original point. Do not change their voltage, only their frequency to match the original point
- Exit the Editor, click Apply, then try launching the game
- If the game no longer crashes, you may save your MSI Afterburner's undervolt settings to one of five profile presets, and ensure "Apply overclocking on system startup" and "Start with Windows" are both applied. If crashes persist, reset your changes to default values.

### **If the fixes don't work:**
The problem might be outside your control. You can try reporting the problem to [Capcom Support](https://www.monsterhunter.com/support/wilds/en/form/consent) by filling out their technical inquiry contact form. Include your platform, and the troubleshooting steps you already took.

