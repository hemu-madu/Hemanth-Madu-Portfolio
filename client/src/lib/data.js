import paceLogo from "@/assets/pace_autonomous_logo.jpg";
import srichaitanyaLogo from "@/assets/srichaitanya_college_logo.jpg";
import sreeBharathiLogo from "@/assets/sree_bharathi_high_school_logo.jpg";
import acmLogo from "@/assets/acm_student_chapter_logo.jpg";
import bitsilicaLogo from "@/assets/bitsilica_logo.jpg";

// Helper: resolve base URL for public assets
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// =====================
// PERSONAL INFO (From Resume)
// =====================
export const personalInfo = {
  name: "Hemanth Madu",
  headline: "Embedded Systems Engineer | Embedded Linux | Linux Device Drivers | Firmware Development",
  roles: [
    "Embedded Systems Engineer",
    "Embedded Linux Engineer",
    "Linux Device Driver Developer",
    "Firmware Engineer",
    "RTOS Developer",
  ],
  tagline:
    "Embedded Systems Engineer with hands-on experience in bare-metal and RTOS-based firmware development on STM32, LPC2148, and ESP32 platforms, with growing expertise in Embedded Linux and Linux Kernel Development.",
  about:
    "Embedded Systems Engineer with hands-on experience in bare-metal and RTOS-based firmware development on STM32, LPC2148, and ESP32 platforms, with growing expertise in Embedded Linux and Linux Kernel Development. Proficient in writing Linux kernel modules, character device drivers, and low-level peripheral drivers (GPIO, UART, SPI, I2C) in Embedded C. Skilled in kernel-space and user-space programming, real-time systems, interrupt-driven design, DMA-based communication, and hardware-software integration. Strong foundation in ARM architecture, debugging using dmesg and printk, and structured validation techniques. Seeking a challenging role in Embedded Software Engineering, Linux Device Driver Development, Firmware Engineering, or Kernel Development where I can contribute to reliable, production-grade embedded solutions.",
  email: "hemanthmadu6454@gmail.com",
  phone: "+91 9491142102",
  location: "Hyderabad, Telangana",
  github: "https://github.com/hemu-madu",
  linkedin: "https://www.linkedin.com/in/hemanth-madu",
  portfolio: "https://hemu-madu.github.io/Hemanth-Madu-Portfolio/",
  resumeUrl: "Hemanth_Madu_Resume.pdf",
};

// =====================
// TECHNICAL SKILLS (Exact Categories from Resume)
// =====================
export const skillCategories = [
  {
    id: "platforms",
    label: "Embedded Platforms",
    icon: "cpu",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "STM32 (STM32L476RG, STM32F411RE)", icon: null },
      { name: "LPC2148 (ARM7TDMI)", icon: null },
      { name: "ESP32", icon: null },
      { name: "Arduino", icon: "devicon-arduino-plain" },
    ],
  },
  {
    id: "embedded-linux",
    label: "Embedded Linux",
    icon: "terminal",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "Linux Kernel Development", icon: "devicon-linux-plain" },
      { name: "Kernel Module Programming", icon: null },
      { name: "Character Device Drivers", icon: null },
      { name: "Embedded Linux", icon: null },
      { name: "Buildroot (Basics)", icon: null },
      { name: "Yocto (Basics)", icon: null },
    ],
  },
  {
    id: "linux-driver-dev",
    label: "Linux Driver Development",
    icon: "layers",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      { name: "GPIO Driver", icon: null },
      { name: "UART Driver", icon: null },
      { name: "SPI Driver", icon: null },
      { name: "I2C Driver", icon: null },
      { name: "Character Device Drivers", icon: null },
      { name: "Kernel Modules", icon: null },
      { name: "Kernel Space vs User Space", icon: null },
      { name: "Device Tree", icon: null },
      { name: "Makefiles", icon: null },
    ],
  },
  {
    id: "linux-kernel-skills",
    label: "Linux Kernel Skills",
    icon: "shield",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    skills: [
      { name: "Kernel Compilation", icon: null },
      { name: "Kernel Configuration", icon: null },
      { name: "Cross-Compilation", icon: null },
      { name: "Bootloader Basics (U-Boot)", icon: null },
      { name: "Debugging with dmesg and printk", icon: null },
    ],
  },
  {
    id: "firmware-rtos",
    label: "Firmware & RTOS",
    icon: "zap",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    skills: [
      { name: "Bare-Metal Firmware", icon: null },
      { name: "FreeRTOS", icon: null },
      { name: "Task Scheduling", icon: null },
      { name: "Queues & Mutexes", icon: null },
      { name: "Semaphores", icon: null },
      { name: "Context Switching", icon: null },
      { name: "Interrupt-Driven Programming", icon: null },
      { name: "DMA-Based Communication", icon: null },
      { name: "Memory Management", icon: null },
    ],
  },
  {
    id: "protocols",
    label: "Communication Protocols",
    icon: "network",
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    skills: [
      { name: "UART / USART", icon: null },
      { name: "SPI", icon: null },
      { name: "I2C", icon: null },
      { name: "CAN", icon: null },
      { name: "GPIO Interfacing", icon: null },
    ],
  },
  {
    id: "languages",
    label: "Programming Languages",
    icon: "code",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    skills: [
      { name: "C (Advanced, Embedded C)", icon: "devicon-c-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "ARM Assembly (Basics)", icon: null },
    ],
  },
  {
    id: "dev-tools",
    label: "Development Tools",
    icon: "settings",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    skills: [
      { name: "STM32CubeIDE", icon: null },
      { name: "Keil uVision", icon: null },
      { name: "GCC Toolchain", icon: "devicon-gcc-plain" },
      { name: "Cross-Compiler (arm-linux-gnueabihf)", icon: null },
      { name: "Git & GitHub", icon: "devicon-git-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
    ],
  },
  {
    id: "debugging-validation",
    label: "Debugging & Validation",
    icon: "search",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    skills: [
      { name: "dmesg", icon: null },
      { name: "printk", icon: null },
      { name: "RealTerm", icon: null },
      { name: "GDB", icon: null },
      { name: "Breakpoints", icon: null },
      { name: "Register-Level Inspection", icon: null },
      { name: "Watch Windows", icon: null },
    ],
  },
  {
    id: "operating-systems",
    label: "Operating Systems",
    icon: "hard-drive",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "Linux (Ubuntu, Kernel 6.x)", icon: "devicon-linux-plain" },
      { name: "Windows", icon: "devicon-windows8-original" },
    ],
  },
];

// Flat lists for backwards compatibility
export const technicalSkills = [
  { name: "Embedded C", percentage: 92 },
  { name: "Linux Kernel & Device Drivers", percentage: 88 },
  { name: "STM32 & Bare-Metal Firmware", percentage: 90 },
  { name: "FreeRTOS & RTOS Multitasking", percentage: 88 },
  { name: "UART / SPI / I2C / CAN Protocols", percentage: 90 },
  { name: "DMA & Interrupt-Driven Architecture", percentage: 85 },
  { name: "LPC2148 & ESP32 Platforms", percentage: 85 },
  { name: "Kernel Compilation & Cross-Toolchains", percentage: 82 },
  { name: "Debugging (dmesg, printk, RealTerm, GDB)", percentage: 88 },
  { name: "Python & Automation", percentage: 85 },
];

export const designSkills = [
  { name: "ACM Student Chapter Leadership", percentage: 95 },
  { name: "Hardware-Software Integration", percentage: 92 },
  { name: "Problem-Solving & Debugging", percentage: 90 },
  { name: "Register-Level Architecture", percentage: 90 },
  { name: "Team Collaboration & Mentorship", percentage: 88 },
];

// =====================
// PROFESSIONAL EXPERIENCE (Exact from Resume)
// =====================
export const experience = [
  {
    id: "bitsilica",
    role: "Embedded Systems Engineer",
    company: "Bitsilica Pvt Ltd",
    type: "Full-Time Engineering",
    period: "June 2025 – October 2026",
    location: "Hyderabad, Telangana",
    logo: bitsilicaLogo,
    logoAlt: "Bitsilica Pvt Ltd",
    summary:
      "Developed low-level peripheral drivers and application-level firmware for STM32 and LPC2148 platforms using Embedded C, implementing DMA and interrupt-driven communication, FreeRTOS multitasking, and structured hardware validation.",
    responsibilities: [
      "Developed low-level peripheral drivers and application-level firmware for STM32 and LPC2148 platforms using Embedded C.",
      "Configured and validated microcontroller peripherals including UART, SPI, I2C, CAN, ADC, and GPIO via register-level programming and HAL.",
      "Implemented DMA-based and interrupt-driven communication mechanisms, reducing CPU overhead and improving data throughput.",
      "Designed and integrated FreeRTOS-based multitasking applications with task scheduling, queue management, and synchronization primitives (mutexes, semaphores).",
      "Performed hardware-software integration, system clock configuration, and peripheral timing verification for reliable embedded operation.",
      "Diagnosed and resolved communication failures using serial terminals (RealTerm), peripheral register inspection, and structured debug workflows.",
      "Contributed to end-to-end embedded solution development spanning hardware interfacing, firmware implementation, and system-level validation.",
    ],
    tech: [
      "Embedded C",
      "STM32",
      "LPC2148",
      "FreeRTOS",
      "UART",
      "SPI",
      "I2C",
      "CAN",
      "ADC",
      "GPIO",
      "DMA",
      "Interrupts",
      "RealTerm",
      "HAL",
    ],
    highlights: [
      "Implemented DMA-based and interrupt-driven communication mechanisms, reducing CPU overhead and improving data throughput.",
      "Designed and integrated FreeRTOS-based multitasking applications with task scheduling, queue management, and synchronization primitives.",
      "Diagnosed and resolved communication failures using serial terminals (RealTerm) and register inspection.",
    ],
  },
];

// Backward-compatible alias
export const internships = experience;

// =====================
// PROJECTS (Exact 3 Projects from Resume)
// =====================
export const projects = [
  // 1. Linux Device Driver Development and Custom Kernel Compilation
  {
    id: "linux-device-driver",
    title: "Linux Device Driver Development and Custom Kernel Compilation",
    platform: "Ubuntu | Kernel 6.8.0",
    badge: "Linux Kernel & Drivers",
    category: "Linux Kernel & Drivers",
    tagline: "Custom Linux kernel build with loadable RTC character device driver and sysfs interface",
    description:
      "Compiled and configured a custom Linux kernel (6.8.0) for an ARM-based embedded platform, including menuconfig-based kernel configuration and Makefile-driven build. Developed a software Real-Time Clock (RTC) character device driver as a Linux kernel module, implementing open, read, write, and ioctl operations in kernel space.",
    image: null,
    architecture: {
      type: "Kernel Space <-> User Space Interfacing",
      layers: [
        "User Space: Test C application calling open(), read(), write(), ioctl() on /dev/rtc_dev0",
        "VFS Layer: Virtual File System routing system calls to character driver file_operations",
        "Device Driver: cdev registration, dynamic chrdev_region, copy_to_user / copy_from_user",
        "Kernel Infrastructure: sysfs class_create(), device_create() for automatic /dev node generation",
        "Hardware Emulation / Timing: RTC register simulation, mutex locking, dmesg logging",
      ],
    },
    highlights: [
      "Compiled and configured a custom Linux kernel (6.8.0) for an ARM-based embedded platform, including menuconfig-based kernel configuration and Makefile-driven build.",
      "Developed a software Real-Time Clock (RTC) character device driver as a Linux kernel module, implementing open, read, write, and ioctl operations in kernel space.",
      "Registered the character device driver with the kernel using dynamic device number allocation and sysfs class integration, enabling user-space access via /dev.",
      "Implemented and loaded/unloaded kernel modules dynamically; validated driver behavior using dmesg log inspection and printk-based kernel tracing.",
      "Resolved gcc-12 compatibility issues, kernel header flag conflicts, and API changes introduced in Linux kernel 6.4+ (class_create() signature update).",
      "Gained hands-on understanding of kernel space vs user space boundaries, character device registration, and Linux driver lifecycle management.",
    ],
    tags: [
      "Ubuntu",
      "Linux Kernel 6.8.0",
      "Character Device Driver",
      "Kernel Module (LKM)",
      "sysfs & /dev",
      "ioctl",
      "dmesg & printk",
      "ARM Platform",
      "Makefiles",
    ],
    githubUrl: "https://github.com/hemu-madu",
    demoUrl: null,
  },

  // 2. Smart RTOS-Based Multi-Sensor Surveillance System
  {
    id: "rtos-surveillance-system",
    title: "Smart RTOS-Based Multi-Sensor Surveillance System",
    platform: "STM32L476RG | FreeRTOS",
    badge: "RTOS Firmware & Sensors",
    category: "RTOS Firmware",
    tagline: "Deterministic multi-tasking surveillance firmware with sensor fusion, SPI flash logging, and ESP32 telemetry",
    description:
      "Architected and implemented a real-time office security system integrating IR motion, microwave radar, BME280 environmental, and OPT3001 ambient light sensors on STM32L476RG.",
    image: null,
    architecture: {
      type: "FreeRTOS Multi-Task Preemptive Architecture",
      layers: [
        "Hardware Layer: STM32L476RG, IR motion, Microwave Radar, BME280 (I2C), OPT3001 (I2C), W25Q Flash (SPI), ESP32 (UART)",
        "Hardware Interrupts: EXTI lines for low-latency motion event response with debounce and priority ISR",
        "FreeRTOS Tasks: Multi-sensor acquisition task, Motion alert task, Flash logging task, Wireless telemetry task",
        "FreeRTOS Synchronization: Queues, counting semaphores, and mutexes ensuring deterministic data acquisition",
        "External Interface: ESP32 UART-bridged WiFi/Bluetooth co-processor for wireless alert transmission",
      ],
    },
    highlights: [
      "Architected and implemented a real-time office security system integrating IR motion, microwave radar, BME280 environmental, and OPT3001 ambient light sensors on STM32L476RG.",
      "Designed FreeRTOS task hierarchy with inter-task communication via queues, counting semaphores, and mutexes to ensure deterministic multi-sensor data acquisition and alert generation.",
      "Developed interrupt-driven motion detection handlers achieving low-latency event response with debounce and priority-based ISR design.",
      "Implemented SPI-based W25Q Flash logging driver and I2C drivers for BME280 and OPT3001 from register-level specifications; validated using serial terminal debugging.",
      "Integrated ESP32 as a UART-bridged WiFi/Bluetooth co-processor for wireless alert transmission; implemented UART filtering to suppress ESP32 boot-log noise.",
      "Performed end-to-end system validation including FreeRTOS heap and stack profiling, float-safe printf configuration (nano.specs), and peripheral timing verification.",
    ],
    tags: [
      "STM32L476RG",
      "FreeRTOS",
      "Task Scheduling",
      "Queues & Semaphores",
      "Mutexes",
      "BME280 (I2C)",
      "OPT3001 (I2C)",
      "W25Q Flash (SPI)",
      "ESP32 (UART)",
      "RealTerm",
    ],
    githubUrl: "https://github.com/hemu-madu",
    demoUrl: null,
  },

  // 3. STM32-Based Low-Level Driver Development and SD Card Temperature Logger
  {
    id: "stm32-sdcard-logger",
    title: "STM32-Based Low-Level Driver Development and SD Card Temperature Logger",
    platform: "STM32 | Bare-Metal",
    badge: "Bare-Metal Driver Architecture",
    category: "Bare-Metal Drivers",
    tagline: "Register-level peripheral drivers (GPIO, SPI, UART) with SPI-mode SD Card CSV data logging",
    description:
      "Designed and implemented bare-metal peripheral drivers for GPIO, SPI, and UART from scratch in Embedded C without HAL abstraction, targeting full register-level control.",
    image: null,
    architecture: {
      type: "Register-Level Modular Bare-Metal Architecture",
      layers: [
        "Memory Map: Direct struct pointer access to RCC, GPIOx, SPIx, USARTx peripheral registers",
        "Low-Level Drivers: GPIO pin configuration (push-pull, alternate function, pull-up), SPI master mode, USART Tx/Rx",
        "Protocol Stack: Custom SPI-mode SD card interface for block read/write and CMD protocol execution",
        "Application Layer: CSV formatted temperature data logging with interrupt-driven button handling",
        "Validation: RealTerm serial stream inspection and continuous real-time data logging sessions",
      ],
    },
    highlights: [
      "Designed and implemented bare-metal peripheral drivers for GPIO, SPI, and UART from scratch in Embedded C without HAL abstraction, targeting full register-level control.",
      "Developed a custom SPI-mode SD card interface to log real-time temperature sensor data in structured CSV format, enabling persistent data storage and retrieval.",
      "Implemented interrupt-driven user button handling to trigger on-demand data retrieval and serial terminal log display via UART.",
      "Built a modular, layered driver architecture separating hardware abstraction, protocol layer, and application logic for scalability and reusability.",
      "Validated system reliability through continuous real-time data logging sessions and structured serial debugging using RealTerm.",
    ],
    tags: [
      "STM32",
      "Bare-Metal",
      "Embedded C",
      "Register-Level Control",
      "GPIO Driver",
      "SPI Driver",
      "UART Driver",
      "SD Card SPI Protocol",
      "CSV Logging",
      "RealTerm",
    ],
    githubUrl: "https://github.com/hemu-madu",
    demoUrl: null,
  },
];

// =====================
// ARCHITECTURE MODELS (For Interactive Engineering Visualizer)
// =====================
export const architectureModels = [
  {
    id: "linux-kernel",
    title: "Linux Character Device Driver Stack",
    subtitle: "User-to-Hardware Control Flow in Linux 6.8",
    description:
      "Illustrates how user applications transition across the system call interface into the Virtual File System (VFS), through file_operations dispatch tables, and down to memory-mapped peripheral registers.",
    nodes: [
      {
        layer: "User Space",
        tag: "Ring 3",
        items: [
          { name: "C Application", desc: "Calls open(), read(), write(), ioctl() on /dev/rtc_dev0" },
          { name: "glibc Wrapper", desc: "Maps user library function to architecture syscall trap (svc / sysenter)" },
        ],
        accent: "border-sky-500/40 bg-sky-500/5",
      },
      {
        layer: "Kernel Space - Subsystem",
        tag: "Ring 0",
        items: [
          { name: "System Call Handler", desc: "Validates user pointer arguments, transitions context" },
          { name: "Virtual File System (VFS)", desc: "Resolves inode, extracts file descriptor, calls f_op methods" },
        ],
        accent: "border-blue-500/40 bg-blue-500/5",
      },
      {
        layer: "Kernel Space - Driver Core",
        tag: "Module",
        items: [
          { name: "Character Driver (cdev)", desc: "Implements file_operations struct: .open, .read, .write, .unlocked_ioctl" },
          { name: "Memory Interfacing", desc: "copy_to_user(), copy_from_user(), mutex lock protection" },
          { name: "sysfs & udev", desc: "class_create(), device_create() for automatic /dev node registration" },
        ],
        accent: "border-cyan-500/40 bg-cyan-500/5",
      },
      {
        layer: "Hardware / Bus",
        tag: "Physical",
        items: [
          { name: "MMIO / Registers", desc: "ioremap(), base address offsets, volatile register reads/writes" },
          { name: "Peripheral Hardware", desc: "RTC, GPIO, I2C, SPI controller hardware" },
        ],
        accent: "border-emerald-500/40 bg-emerald-500/5",
      },
    ],
  },
  {
    id: "freertos-stack",
    title: "FreeRTOS Preemptive Multi-Task Architecture",
    subtitle: "Deterministic Sensor Surveillance Firmware (STM32L476RG)",
    description:
      "Details the relationship between asynchronous hardware interrupts (EXTI), priority-preempted FreeRTOS tasks, thread-safe synchronization (semaphores, mutexes), and external communication peripherals.",
    nodes: [
      {
        layer: "Hardware Interrupts (ISRs)",
        tag: "Fast Context",
        items: [
          { name: "PIR / Radar EXTI", desc: "External interrupt triggers on motion edge; minimal latency ISR" },
          { name: "xSemaphoreGiveFromISR", desc: "Unblocks alert task immediately without scheduler delay" },
        ],
        accent: "border-amber-500/40 bg-amber-500/5",
      },
      {
        layer: "High-Priority RTOS Tasks",
        tag: "Priority 3-4",
        items: [
          { name: "MotionAlertTask", desc: "Blocks on semaphore; immediately logs timestamp and sounds alert" },
          { name: "SensorAcqTask", desc: "Periodic task sampling BME280 & OPT3001 over I2C bus" },
        ],
        accent: "border-emerald-500/40 bg-emerald-500/5",
      },
      {
        layer: "Synchronization & IPC",
        tag: "Kernel IPC",
        items: [
          { name: "I2C Bus Mutex", desc: "Prevents race conditions when multiple tasks query shared sensors" },
          { name: "Sensor Message Queue", desc: "Batches sensor readings into structured packets for logging" },
        ],
        accent: "border-teal-500/40 bg-teal-500/5",
      },
      {
        layer: "Low-Priority / I/O Tasks",
        tag: "Priority 1-2",
        items: [
          { name: "FlashLoggerTask", desc: "Reads queue and burns records into SPI W25Q NOR flash" },
          { name: "ESP32CommsTask", desc: "Pushes telemetry packets via UART to ESP32 gateway" },
        ],
        accent: "border-blue-500/40 bg-blue-500/5",
      },
    ],
  },
  {
    id: "baremetal-bus",
    title: "STM32 ARM Cortex-M Bus & Driver Architecture",
    subtitle: "Direct Register-Level Peripheral Interaction (Bare-Metal)",
    description:
      "Maps the ARM Cortex-M memory-mapped I/O structure, showcasing direct register access across AHB/APB buses without HAL overhead.",
    nodes: [
      {
        layer: "ARM Cortex-M Core",
        tag: "Processor",
        items: [
          { name: "CPU & NVIC", desc: "Nested Vectored Interrupt Controller managing prioritized peripheral interrupts" },
          { name: "SysTick Timer", desc: "Deterministic system heartbeat for delay and timestamping" },
        ],
        accent: "border-indigo-500/40 bg-indigo-500/5",
      },
      {
        layer: "Bus Matrix (AHB / APB)",
        tag: "Interconnect",
        items: [
          { name: "AHB Bus Matrix", desc: "Connects core to high-speed GPIO ports A, B, C" },
          { name: "APB1 / APB2 Buses", desc: "Bridges SPI, USART, and I2C peripherals through bus prescalers" },
        ],
        accent: "border-sky-500/40 bg-sky-500/5",
      },
      {
        layer: "Register Manipulation",
        tag: "Direct Structs",
        items: [
          { name: "Clock Gate (RCC)", desc: "Enable clock in RCC before register access" },
          { name: "Pin Configuration", desc: "MODER (Mode), OTYPER (Output), OSPEEDR (Speed), PUPDR (Pull-up/down)" },
          { name: "Control Registers", desc: "SPIx_CR1 (Baud, Master, CPOL/CPHA, SPE), USARTx_CR1, USARTx_BRR" },
        ],
        accent: "border-cyan-500/40 bg-cyan-500/5",
      },
      {
        layer: "External Hardware Devices",
        tag: "Physical",
        items: [
          { name: "SD Card (SPI Mode)", desc: "CS, SCK, MOSI, MISO lines running custom SPI protocol" },
          { name: "Host PC / RealTerm", desc: "115200 baud UART serial terminal for live CSV logging" },
        ],
        accent: "border-emerald-500/40 bg-emerald-500/5",
      },
    ],
  },
];

// =====================
// EDUCATION (Exact from Resume, Matching Logo Names)
// =====================
export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech) – Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "PACE Institute of Technology and Sciences, Ongole",
    location: "Ongole, Andhra Pradesh",
    period: "2021 – 2025",
    score: "CGPA: 8.63 / 10",
    graduated: "Graduated: May 2025",
    logo: paceLogo,
    logoAlt: "PACE Institute of Technology and Sciences",
    highlights: [
      "Bachelor of Technology (B.Tech) in Computer Science and Engineering with CGPA: 8.63 / 10, graduated May 2025.",
      "Comprehensive foundation in Operating Systems, Computer Architecture, Data Structures, Algorithms, and Real-Time Systems.",
      "Elected Chair of the ACM Student Chapter, organizing workshops on C programming, embedded concepts, and technical competitions.",
    ],
  },
  {
    id: "intermediate",
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics, Chemistry",
    institution: "Sri Chaitanya Junior College, Eluru",
    location: "Eluru, Andhra Pradesh",
    period: "2019 – 2021",
    score: "Percentage: 78.9%",
    graduated: "Graduated: 2021",
    logo: srichaitanyaLogo,
    logoAlt: "Sri Chaitanya Junior College",
    highlights: [
      "Strong foundation in Advanced Physics (Mechanics, Electromagnetism, Semiconductor Electronics) and Mathematics.",
      "Scored 78.9% (789/1000 marks) under Andhra Pradesh State Board curriculum.",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    field: "General Secondary Curriculum",
    institution: "Sri Bharathi High School, Eluru",
    location: "Eluru, Andhra Pradesh",
    period: "2018 – 2019",
    score: "GPA: 9.2 / 10 (92%)",
    graduated: "Completed: 2019",
    logo: sreeBharathiLogo,
    logoAlt: "Sri Bharathi High School",
    highlights: [
      "Achieved 92% (GPA 9.2 / 10) in Secondary School Board Examinations.",
    ],
  },
];

// =====================
// CERTIFICATIONS
// =====================
export const certifications = [
  {
    id: "iot-nptel",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL (IIT Program)",
    date: "Certified",
    description:
      "Embedded architecture, communication protocols, real-time operating systems (RTOS), and IoT network deployment.",
    badge: "Embedded & RTOS",
    logo: null,
  },
  {
    id: "pcap-python",
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco",
    date: "Certified",
    description:
      "Structured programming, testing utilities, automation scripts, and object-oriented Python design.",
    badge: "Programming & Automation",
    logo: null,
  },
];

// =====================
// LEADERSHIP EXPERIENCE (Exact from Resume, Matching Logo Names)
// =====================
export const leadership = [
  {
    id: "acm-chair",
    title: "Chair – ACM Student Chapter",
    organization: "ACM Student Chapter",
    parentOrg: "Association for Computing Machinery (ACM)",
    institution: "PACE Institute of Technology and Sciences, Ongole",
    membershipId: "8730306",
    period: "2021 – 2025",
    logo: acmLogo,
    logoAlt: "ACM Student Chapter",
    summary:
      "Led coding workshops, mentored junior students, and organized technical challenges and peer-learning sessions on C programming, data structures, and core computer science concepts for 50+ student members.",
    responsibilities: [
      "Led coding workshops and knowledge-sharing sessions on C programming, data structures, and core computer science concepts for 50+ student members.",
      "Mentored junior students in problem-solving, programming fundamentals, and debugging through hands-on coding activities.",
      "Organized technical events, coding challenges, and peer-learning sessions while coordinating student teams to encourage collaboration and practical learning.",
    ],
  },
];
