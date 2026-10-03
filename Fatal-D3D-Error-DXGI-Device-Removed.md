## **UNFINISHED.**

**Symptoms:** At some point while launching the game or playing it, it suddenly crashes with the error noting a "GPU Crash."

**Likely Cause:** Incompatible drivers, GPU overclocking, external overlays and recorders, or certain in-game settings.


### General Fixes (try in order):
**1.Disable Frame Generation and overlays/recorders.** The game may be sensitive to Frame Gen features on certain GPUs. We will first try disabling Frame Generation in both Monster Hunter Wilds and your GPU's software to ensure it does not override the in-game setting.

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
  
