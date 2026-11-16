import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, Activity } from "lucide-react";

const terminalTabs = [
  {
    id: "kernel",
    title: "dmesg (Linux Kernel 6.8)",
    icon: Terminal,
    content: [
      { type: "sys", text: "[    0.000000] Linux version 6.8.0-custom (hemanth@workstation)" },
      { type: "info", text: "[    1.104230] kernel: Initializing character device drivers..." },
      { type: "cmd", text: "$ sudo insmod rtc_char_driver.ko" },
      { type: "ok", text: "[    1.428105] rtc_char_driver: Major 240, Minor 0 dynamically allocated" },
      { type: "ok", text: "[    1.428118] rtc_char_driver: device node created at /dev/rtc_dev0" },
      { type: "data", text: "$ ./test_app --ioctl RTC_SET_TIME" },
      { type: "ok", text: "[    2.004112] rtc_char_driver: copy_from_user OK -> time sync 20:04:00" },
      { type: "status", text: "STATUS: LKM active | Memory access OK | VFS connected" },
    ],
  },
  {
    id: "freertos",
    title: "FreeRTOS v10.4.6 (STM32L476)",
    icon: Zap,
    content: [
      { type: "sys", text: "[SYS_BOOT] FreeRTOS Kernel Starting... Clock: 80 MHz" },
      { type: "info", text: "TASK_CREATE: MotionAlertTask   | Priority: 4 | Stack: 512w" },
      { type: "info", text: "TASK_CREATE: SensorAcqTask     | Priority: 3 | Stack: 256w" },
      { type: "info", text: "TASK_CREATE: FlashLoggerTask   | Priority: 2 | Stack: 512w" },
      { type: "cmd", text: ">>> EXTI15_10_IRQHandler: PIR trigger detected on PC13" },
      { type: "ok", text: ">>> xSemaphoreGiveFromISR(xMotionSemaphore) -> Task Yield" },
      { type: "data", text: "[LOG] BME280: 27.4°C, 1013.2hPa | OPT3001: 342 lux" },
      { type: "status", text: "STATUS: Preemptive Scheduler Running | CPU Load: 14.2%" },
    ],
  },
  {
    id: "stm32",
    title: "STM32 Register Inspector",
    icon: Cpu,
    content: [
      { type: "sys", text: "TARGET: STM32F411RE (ARM Cortex-M4 @ 100MHz)" },
      { type: "info", text: "RCC->AHB1ENR  |= RCC_AHB1ENR_GPIOAEN     /* GPIOA clock EN */" },
      { type: "info", text: "GPIOA->MODER  &= ~(0x3 << (5 * 2))      /* Clear PA5 */" },
      { type: "info", text: "GPIOA->MODER  |=  (0x1 << (5 * 2))      /* PA5: Output */" },
      { type: "cmd", text: "SPI1->CR1     = SPI_CR1_MSTR | SPI_CR1_BR_2 | SPI_CR1_SPE" },
      { type: "ok", text: "SPI1->DR      = 0x48 (CMD0: GO_IDLE_STATE)" },
      { type: "data", text: "SPI1->SR      & SPI_SR_RXNE -> R1 Response: 0x01 (Card Ready)" },
      { type: "status", text: "STATUS: SD Card initialized in SPI mode | Direct MMIO" },
    ],
  },
];

export default function HeroTerminalVisual() {
  const [activeTab, setActiveTab] = useState("kernel");
  const tabData = terminalTabs.find((t) => t.id === activeTab) || terminalTabs[0];

  return (
    <div className="terminal-window w-full max-w-xl mx-auto shadow-2xl border-slate-800">
      {/* Terminal Title Bar */}
      <div className="terminal-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 pl-2">
            embedded-ttyUSB0 &bull; 115200 8N1
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>CONNECTED</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 bg-slate-950/80 border-b border-slate-800/80 overflow-x-auto text-[11px]">
        {terminalTabs.map((t) => {
          const Icon = t.icon;
          const isSelected = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                isSelected
                  ? "bg-slate-900 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal Output */}
      <div className="p-4 sm:p-5 space-y-1.5 font-mono text-[11px] leading-relaxed min-h-[220px] bg-slate-950/95 overflow-x-auto">
        {tabData.content.map((line, idx) => {
          let colorClass = "text-slate-300";
          if (line.type === "sys") colorClass = "text-purple-400 font-semibold";
          if (line.type === "info") colorClass = "text-slate-400";
          if (line.type === "cmd") colorClass = "text-amber-300 font-semibold";
          if (line.type === "ok") colorClass = "text-emerald-400";
          if (line.type === "data") colorClass = "text-cyan-300";
          if (line.type === "status")
            colorClass = "text-primary border-t border-slate-800/80 pt-2 mt-2 font-bold";

          return (
            <div key={idx} className="flex items-start gap-2 min-w-0">
              <span className="text-slate-600 select-none shrink-0">$</span>
              <span className={`${colorClass} break-all sm:break-normal`}>{line.text}</span>
            </div>
          );
        })}
        <div className="flex items-center gap-1 text-slate-500 pt-1">
          <span className="text-slate-600 select-none">&gt;</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
        </div>
      </div>

      {/* Hardware Telemetry Footer */}
      <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span>BOARD: STM32L476 / LPC2148</span>
        <span>BAUD: 115200</span>
        <span className="text-cyan-400">JTAG / SWD OK</span>
      </div>
    </div>
  );
}
