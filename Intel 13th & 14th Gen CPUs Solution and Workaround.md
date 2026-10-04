
## This page concerns Intel CPU Gen 13/14 owners only.

Certain Intel CPUs belonging to Generations 13th and 14th are susceptible to instability, as some may contain a documented manufacturing defect. If the CPU is affected but not degraded, **a BIOS update** may resolve the issue. If it suffers from degradation, a workaround through the **Intel Extreme Tuning Utility application (XTU)** exists.

First, you must ensure your **BIOS is updated to the latest version** available, since Intel released an update aimed at fixing unstable 13th/14th Gen CPUs.

### **1. Update your BIOS.** 
First, you must find your **motherboard's manufacturer and specific product**.

**On Windows:**

- On your PC, search for "System Information"
- Note your "BaseBoard Manufacturer" and "BaseBoard Product"
- Search the internet for your manufacturer's official support page using both manufacturer and motherboard's names (i.e. "Gigabyte B550M K support")
- Enter the support page - Find and navigate to the BIOS section - Download the latest BIOS version and follow the installation instructions. Be careful not to interrupt installation

If a BIOS update does not resolve the crash, continue reading.

### **2. Lower Performance Core Ratio through Intel XTU.**

**Prerequisite: Intel XTU requires an unlocked processor and a chipset that supports full overclocking.** To learn whether you possess those:

- On your PC, search for System Information
- Inside, find "Processor"

If it does not contain a suffix, or contains only an F (i.e. 13th Gen Intel(R) Core(TM) i7-13700F), then it is a locked processor, and you must navigate to []()

-If it contains the following suffixes: K/KF/KS, (i.e. 13th Gen Intel(R) Core(TM) i7-13700K) it is an unlocked processor.
High frequencies (GHz) on 13th/14th Intel CPUs may cause instability, and thus reducing them may stabilize a degraded CPU. To do so:

- Open Intel XTU. You can download it [here](https://www.intel.com/content/www/us/en/download/17881/intel-extreme-tuning-utility-intel-xtu.html). Read the detailed description to learn which version you must download according to your CPU's Generation. 



