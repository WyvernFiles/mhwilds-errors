## **UNFINISHED.**

**Symptoms:** At some point while launching the game or playing it, it suddenly crashes with the error noting a "GPU Crash."

**Likely Cause:** Incompatible drivers, GPU overclocking, external overlays and recorders, or certain in-game settings.


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

- **ShadowPlay:** Open NVIDIA App - Settings - Ensure "NVIDIA Overlay"" is off

- **AMD ReLive:** Open Adrenalin - Settings - Preferences - Ensure "In-Game Overlay" is off

### **3. Verify Game Files, then Delete shader.cache2 File.** 
A GPU crash can occur due to things like a corrupted shader cache file. If a GPU driver update changed how shaders are compiled, an old cache would be incompatible, for example. If the game tries to read this corrupted data, it may crash.

- Open Steam and go to your Library
- Right click the game - Properties - Installed Files - "Verify intergrity of game files"

Afterwards, delete your shader.cache2 file:

- From your Steam's Library, right click the game - Manage - Browse Local Files
- Find and delete "shader.cache2"

## **4. Check and Adjust your GPU Driver.** 
Some GPU driver versions are more or less stable than others when it comes to Wilds. Note that when it comes to uninstalling a GPU driver, it is recommended to use Display Driver Uninstaller (DDU) to perform a clean uninstall, as manually uninstalling a driver may leave residual files that can interfere with newly installed drivers. To learn how to use DDU, navigate to [How to use Display Drive Uninstaller](https://github.com/WyvernFiles/mhwilds-errors/blob/main/How%20to%20use%20Display%20Drive%20Uninstaller.md).

If you recently updated your driver and then crashes occurred, roll back to the previous version. If you're using an older driver and still crashing, consider updating to the latest version. **For AMD Users:** If you are on **driver 25.10.2 or newer**, these are known to be problematic for Wilds. Try rolling back to **25.9.1 or 25.9.2**. 

