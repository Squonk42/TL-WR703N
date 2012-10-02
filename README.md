TL-WR703N
=========

Reverse Engineering work on the TP-LINK® TL-WR703N 150M 802.11n Wi-Fi Router

### What?
Unlike what it is marketed for, the TP-LINK® TL-WR703N is not a “3G travel router”: it does not include a 3G modem at all, it simply means that the firmware support external USB 3G modems!

Despite this shortcoming, at less than $23, this device is the cheapest Wi-Fi router you can get west of the Pecos River! For this ridiculously low price, you get:

* A clean, small (57 mm x 57 mm x 18 mm) shiny white/light blue cover plastic case with rounded corners that is pretty easy to open with just a spudger or any other thin and resistant tool
* An Atheros AR9331 chipset with
 * An Atheros AR7040 400 MHz MISP24kc CPU
 * Integrated 802.11n 150 Mbps (130 Mbps real) Wi-Fi with 20 dB (100 mW) output power
* 4 MB of serial (SPI) Flash memory
* 32 MB of DDR SDRAM
* An USB 2.0 host port
* A shielded Ethernet 10/100 Mbps RJ45 jack
* An external power supply using a provided wall plug via a micro-USB socket
* A software-controlled reset pinhole switch
* A blue surface-mounted LED (that can be replaced by a 3 mm through-hole LED)
* A built-in Wi-Fi printed antenna (that can be replaced by an external one)
* An UART accessible via 2 tiny pads that provides access to the uBoot bootloader and the Linux 2.6 console

This device was released in August 2011 in China, and is not exported, though it is easy to get one on eBay.

There is also a closely related sister device as the TP-LINK® TL-MR3020 for the export market, with the following differences:

* It is CE/FCC certified
* It has 4 additional surface-mounted LEDs
* It has an additional sliding switch with 3 positions
* The reset button is combined with the WPS LED
* It has 2 Wi-Fi printed antennas, but only one is actually used
* The RJ45 Ethernet jack is not shielded
* The UART is available on a nice 0.1” pitch through-hole connector (not mounted)
* It is larger: 67 mm x 74 mm x 22 mm)
* It is more expensive: 9 on eBay

### Why?
Despite its interesting characteristics, the TL-WR703N router suffers from a complete lack of information regarding its implementation:

* No source code provided by the OEM manufacturer, although it is clearly using open-source software for building its firmware
* The datasheet for the main chip (Atheros AR9331) is only available under NDA (Non-Disclosure Agreement)
* No available schematic, layout or BOM (Bill Of Materials) files

However, people started to imagine unforeseen applications for the cheapest available embedded Linux platform on the market, ranging from software-only firmware customization using the dedicated [OpenWRT distribution](https://openwrt.org/), to hardware hacks involving fine pitch soldering in order to control various physical devices.

The hardware-focused projects using the TL-WR703N tend to be centralized in a few OpenWRT forum threads ([[1]](https://forum.openwrt.org/viewtopic.php?id=36471), [[2]](https://forum.openwrt.org/viewtopic.php?id=38994), [[3]](https://forum.openwrt.org/viewtopic.php?id=39567), [[5]](https://forum.openwrt.org/viewtopic.php?id=34437), and [[6]](https://forum.openwrt.org/viewtopic.php?id=31729)), and rapidly focused on the research of available I/O resources and low-level electronic understanding.
Although some progress has been made, like an almost exhaustive main AR9331 chip pinout and a component-by-component description, only a full reverse-engineering work can provide the answers to all the questions on the hardware.

So this reverse-engineering of the TP-LINK® TL-WR703N router hardware is not purposed to reproduce it, but to provide a full understanding of it. This job has not economic goal, being aimed only towards acquiring knowledge on this amazing little device.

###Who?
This is the work of a single person (Michel Stempin), based on the [TP-LINK® TL-WR703N teardown](http://www.kean.com.au/oshw/WR703N/teardown/) performed by Kean from the OpenWRT forum.

###Where?
All the resulting files are available in the [corresponding GitHub repository](https://github.com/Squonk42/TL-WR703N), and discussions are taking place into the corresponding threads from the [OpenWRT forum](https://forum.openwrt.org/).

So any question, idea, remark can be posted there!

W###hen?
This work took around 150 hours (2 week-ends and all the evenings in-between on my spare time) to produce a first PCB layout from the raw PCB top and bottom pictures.

But spare time costs nothing, and hobbyist motivation is higher than normal paid work!
