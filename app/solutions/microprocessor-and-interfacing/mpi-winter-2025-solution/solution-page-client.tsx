"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";
import PremiumLockCard from "@/components/PremiumLockCard";
import QuestionAccordion from "@/components/QuestionAccordion";

const SUBJECT_ID = "microprocessor-and-interfacing";
const PRICE = 19;

type AnswerContent = {
  paragraphs: string[];
  bullets?: string[];
  highlight?: string;
  note?: string;
};

type SubQuestion = {
  id: string;
  title: string;
  content: AnswerContent;
};

type QuestionData = {
  id: number;
  title: string;
  summary: string;
  free: boolean;
  subQuestions: SubQuestion[];
};

const QUESTIONS: QuestionData[] = [
  {
    id: 1,
    title: "Describe the components of a microprocessor and their roles.",
    summary:
      "A premium answer covering the microprocessor's main components, how it communicates with memory and I/O, and the 8085 architectural elements.",
    free: true,
    subQuestions: [
      {
        id: "a",
        title: "Describe the components of a microprocessor and their roles.",
        content: {
          highlight: "ALU, registers, CU, accumulator, and buses form the microprocessor core.",
          paragraphs: [
            "A microprocessor is the central processing element that performs calculations, controls operations, and manages data transfer between devices. Its main components each serve a unique role in this process.",
            "A complete answer lists the component and then explains the role it plays in computation and communication.",
          ],
          bullets: [
            "Arithmetic Logic Unit (ALU): Performs arithmetic and logical operations including addition, subtraction, multiplication, division, AND, OR, NOT, XOR, and comparison.",
            "Registers: Small temporary storage locations inside the processor. They store data, instructions, and addresses for fast internal access.",
            "Control Unit (CU): Controls all processor operations, generates control signals, fetches and decodes instructions, then executes them in proper sequence.",
            "Accumulator: Special register connected to the ALU. Stores intermediate arithmetic and logical results.",
            "Bus System: Communication pathway. Address Bus carries addresses, Data Bus transfers data, Control Bus sends control signals like RD̅, WR̅, and IO/M̅.",
          ],
          note: "Pair each component with its role to earn full marks in GTU answers.",
        },
      },
      {
        id: "b",
        title: "Detail the communication process with memory and I/O devices.",
        content: {
          highlight: "Microprocessor communication follows address, control, and data phases.",
          paragraphs: [
            "Communication with memory and I/O happens in three distinct steps: sending the address, sending the control signal, and transferring the data. The address bus identifies the target, the control bus defines the operation, and the data bus carries the actual information.",
            "This process is the same for memory and I/O; the difference is whether IO/M̅ selects memory or I/O mode.",
          ],
          bullets: [
            "Step 1: Address is placed on the Address Bus to select memory location or I/O device.",
            "Step 2: Control signals RD̅ or WR̅ are activated on the Control Bus.",
            "Step 3: Data is transferred on the Data Bus, either from memory/I/O to processor or from processor to memory/I/O.",
            "Memory Read: Address on address bus, RD̅ low, data returns on data bus.",
            "Memory Write: Address on address bus, data on data bus, WR̅ low to store the value.",
          ],
          note: "Include examples such as 2050H or RD̅/WR̅ behavior to make the answer concrete.",
        },
      },
      {
        id: "c",
        title: "Draw the 8085 architecture and list registers, special registers, and flags.",
        content: {
          highlight: "The 8085 contains registers, a flag register, and dedicated control logic for execution.",
          paragraphs: [
            "The 8085 has six general purpose registers: B, C, D, E, H, L. These can be paired as BC, DE, and HL for 16-bit operations. Special purpose registers include the Accumulator, Program Counter, Stack Pointer, Instruction Register, and Flag Register.",
            "The flag register contains status bits that describe the result of operations, which is essential for conditional execution.",
          ],
          bullets: [
            "General Purpose Registers: B, C, D, E, H, L store temporary data. They can be paired for 16-bit operations.",
            "Accumulator (A): Stores arithmetic and logical results.",
            "Program Counter (PC): Holds address of the next instruction.",
            "Stack Pointer (SP): Points to top of stack memory for calls and interrupts.",
            "Flag Register: Sign (S) for negative result, Zero (Z) for zero result, Auxiliary Carry (AC) for BCD operations, Parity (P) for even parity, Carry (CY) for carry/borrow.",
          ],
          note: "A strong answer includes the register names and flag meanings clearly.",
        },
      },
    ],
  },
  {
    id: 2,
    title: "List three control signals generated by the 8085 and explain demultiplexing and instruction execution.",
    summary:
      "A premium answer covering control signals, demultiplexing of AD0–AD7, and the instruction cycle with machine cycles and T-states.",
    free: false,
    subQuestions: [
      {
        id: "a",
        title: "List three control signals and their purposes.",
        content: {
          highlight: "Control signals coordinate memory and I/O transfers in the 8085.",
          paragraphs: [
            "The 8085 uses RD̅, WR̅, and IO/M̅ to distinguish read versus write operations and memory versus I/O operations. These signals are active low and they directly control external devices.",
            "A detailed answer names each signal and explains its role with an example.",
          ],
          bullets: [
            "RD̅ (Read): Active low. Instructs memory or I/O to place data on the data bus.",
            "WR̅ (Write): Active low. Instructs memory or I/O to accept data from the data bus.",
            "IO/M̅: Low for memory operations, high for I/O operations.",
          ],
          note: "Mention the active low behavior of RD̅ and WR̅ for a precise response.",
        },
      },
      {
        id: "b",
        title: "Explain the process of demultiplexing buses in the 8085.",
        content: {
          highlight: "A latch and ALE separate address and data on the multiplexed bus.",
          paragraphs: [
            "The 8085 uses AD0–AD7 as a multiplexed low-order address/data bus. During T1, the lines carry the lower address bits. ALE goes high to latch the address externally. After that, AD0–AD7 switch to carry data while the address remains latched.",
            "This reduces pin count while still allowing separate address and data transfers.",
          ],
          bullets: [
            "Step 1: AD0–AD7 present lower-order address during T1.",
            "Step 2: ALE goes high to enable the external latch to store the address.",
            "Step 3: AD0–AD7 become the data bus for the remaining T-states.",
          ],
          note: "Include ALE and an external latch like 74LS373 in the explanation.",
        },
      },
      {
        id: "c",
        title: "Describe the instruction cycle, machine cycles, and T-states of the 8085.",
        content: {
          highlight: "Instruction execution is built from machine cycles and T-states.",
          paragraphs: [
            "The instruction cycle is the complete sequence required to fetch, decode, execute, and store the result of an instruction. It is composed of one or more machine cycles, each of which contains multiple T-states.",
            "For example, opcode fetch usually has 4 T-states, while a memory read typically has 3 T-states. Together they form the timing for instruction execution.",
          ],
          bullets: [
            "Instruction Cycle: The full completion of one instruction.",
            "Machine Cycle: A single operation within the instruction cycle such as opcode fetch, memory read, or memory write.",
            "T-State: One clock period. Each machine cycle contains multiple T-states.",
          ],
          note: "Use opcode fetch and memory read examples to support the answer.",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Explain the 8085 instruction set and correct sample assembly errors.",
    summary:
      "A premium answer covering instruction categories, timing for example instructions, and corrected assembly code.",
    free: false,
    subQuestions: [
      {
        id: "a",
        title: "Describe the instruction set of the 8085 microprocessor.",
        content: {
          highlight: "Instruction categories define how the processor moves data and performs operations.",
          paragraphs: [
            "The 8085 instruction set is categorized into data transfer, arithmetic, logical, branching, and machine control instructions. Each category has a specific role in program execution.",
            "A clear answer lists examples and explains their purpose.",
          ],
          bullets: [
            "Data Transfer: MOV, MVI, LDA, STA, LXI — move data between registers, memory, and I/O.",
            "Arithmetic: ADD, SUB, INR, DCR, ADI — perform addition, subtraction, increment, and decrement.",
            "Logical: ANA, ORA, XRA, CMP, CMA — perform logical operations and comparisons.",
            "Branching: JMP, JZ, JNZ, CALL, RET — change the execution flow based on conditions.",
            "Machine Control: NOP, HLT, EI, DI — control processor state and interrupts.",
          ],
          note: "Provide one example from each category for a complete answer.",
        },
      },
      {
        id: "b",
        title: "Explain the details of MOV B, M and SHLD 2300H.",
        content: {
          highlight: "One instruction reads memory, the other writes register pair data to memory.",
          paragraphs: [
            "MOV B, M reads the memory location pointed to by HL and copies it into register B. SHLD 2300H stores the contents of HL directly into two consecutive memory locations.",
            "These instructions differ in size, machine cycles, and T-state requirements.",
          ],
          bullets: [
            "MOV B, M: Size = 1 byte, Addressing Mode = Register Indirect, Machine Cycles = 2, T-States = 7.",
            "SHLD 2300H: Size = 3 bytes, Addressing Mode = Direct, Machine Cycles = 5, T-States = 16.",
            "MOV B, M copies memory content into register B. SHLD 2300H stores L at 2300H and H at 2301H.",
          ],
          note: "Mention exact sizes and timing values to match the exam format.",
        },
      },
      {
        id: "c",
        title: "Correct the errors in the sample assembly program.",
        content: {
          highlight: "Use MOV for register transfer, LDA for direct memory, ADI for immediate addition, and STA for storing accumulator.",
          paragraphs: [
            "The sample program contains incorrect instructions: MVI C, D, LDAX 2099H, ADD 01H, and STAX 3000H. Each must be replaced with the correct 8085 instruction.",
            "A corrected program list with reasons shows understanding of instruction usage.",
          ],
          bullets: [
            "MVI C, D is wrong; use MOV C, D because MVI only accepts immediate data.",
            "LDAX 2099H is wrong; use LDA 2099H because LDAX requires a register pair, not a direct address.",
            "ADD 01H is wrong; use ADI 01H because ADD only accepts a register operand.",
            "STAX 3000H is wrong; use STA 3000H because STAX uses a register pair and cannot store to a direct address.",
          ],
          note: "A corrected instruction list plus reason gives the examiner confidence in your solution.",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Define interfacing, explain interrupts, and write a subtraction program.",
    summary:
      "A premium answer for interfacing, 8085 interrupt management, and a practical subtraction assembly program.",
    free: false,
    subQuestions: [
      {
        id: "a",
        title: "Define interfacing in the context of microprocessors.",
        content: {
          highlight: "Interfacing connects external devices to the microprocessor for data exchange.",
          paragraphs: [
            "Interfacing means connecting a microprocessor to external peripherals so they can communicate. It includes memory interfacing and I/O interfacing through address, data, and control buses.",
            "A strong answer names devices like keyboard, printer, display, and sensors and explains how the processor reads and writes data to these devices.",
          ],
          bullets: [
            "Purpose: Transfer data, control hardware, and enable communication with input/output devices.",
            "Memory Interfacing: Connect RAM or ROM using address and data buses.",
            "I/O Interfacing: Connect I/O devices using control signals and address decoding.",
          ],
          note: "Mention both memory and I/O interfacing for a complete response.",
        },
      },
      {
        id: "b",
        title: "Explain how interrupts are managed in the 8085.",
        content: {
          highlight: "Interrupts allow urgent tasks to interrupt normal execution safely.",
          paragraphs: [
            "When an interrupt occurs, the 8085 finishes the current instruction, saves the return address on the stack, jumps to the interrupt service routine, and returns to the main program using RET.",
            "This process allows the processor to respond quickly to external events without continuously polling devices.",
          ],
          bullets: [
            "TRAP: Highest priority, non-maskable interrupt used for critical conditions.",
            "RST 7.5 / RST 6.5 / RST 5.5: Maskable vectored interrupts with descending priority.",
            "INTR: Lowest priority non-vectored interrupt that requires an external address.",
          ],
          note: "Include the stack save and RET return step for completeness.",
        },
      },
      {
        id: "c",
        title: "Write an 8085 program to subtract two 8-bit numbers.",
        content: {
          highlight: "Load the numbers, subtract, and store the result using a simple program sequence.",
          paragraphs: [
            "Assume the first number is stored at 2500H and the second number at 2501H. The program loads the first number into the accumulator, saves it in register B, loads the second number, subtracts register B, and stores the result at 2502H.",
            "This gives a clear and correct solution using LDA, MOV, SUB, STA, and HLT.",
          ],
          bullets: [
            "2000H: LDA 2500H — Load first number into accumulator.",
            "2003H: MOV B, A — Save first number in register B.",
            "2004H: LDA 2501H — Load second number into accumulator.",
            "2007H: SUB B — Subtract register B from accumulator.",
            "2008H: STA 2502H — Store result in memory.",
            "200BH: HLT — Stop execution.",
          ],
          note: "Provide addresses and comments to match the expected exam answer format.",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Explain 8255/8259 interfaces, ADI/SUI instructions, and 80286/80386 advancements.",
    summary:
      "A premium answer covering programmable peripheral and interrupt interfaces, immediate arithmetic instructions, and processor evolution.",
    free: false,
    subQuestions: [
      {
        id: "a",
        title: "Define the purpose of the 8255A Programmable Peripheral Interface.",
        content: {
          highlight: "8255A expands processor I/O and supports programmable port modes.",
          paragraphs: [
            "The 8255A is a programmable I/O device that provides 24 I/O lines through ports A, B, and C. It is used to connect external devices like keyboards, displays, and sensors to the microprocessor.",
            "It supports modes for simple I/O, handshake I/O, and bidirectional transfer.",
          ],
          bullets: [
            "Port A, Port B, Port C: Each 8-bit and programmable as input or output.",
            "Mode 0: Simple I/O.",
            "Mode 1: Handshake I/O with ready/acknowledge signals.",
            "Mode 2: Bidirectional data transfer on Port A.",
          ],
          note: "Mention the programmable modes and I/O expansion clearly.",
        },
      },
      {
        id: "b",
        title: "Explain ADI and SUI instructions with examples.",
        content: {
          highlight: "ADI and SUI perform immediate arithmetic directly on the accumulator.",
          paragraphs: [
            "ADI adds an immediate value to the accumulator, while SUI subtracts an immediate value from it. Both update the accumulator and relevant flags.",
            "Give a simple program example to show how the instructions are used.",
          ],
          bullets: [
            "Example: MVI A, 20H; ADI 25H → Accumulator becomes 45H.",
            "Example: MVI A, 30H; SUI 10H → Accumulator becomes 20H.",
            "ADI and SUI are used for immediate arithmetic without needing a second register.",
          ],
          note: "Mention that ADI and SUI are immediate instructions operating on A.",
        },
      },
      {
        id: "c",
        title: "Compare the architectural advances of 80286 and 80386 over 8086.",
        content: {
          highlight: "80286 introduced protected mode; 80386 added 32-bit addressing and virtual memory.",
          paragraphs: [
            "The 80286 improved on the 8086 by adding 24-bit addressing and protected mode, which allowed access to 16 MB of memory and better program protection.",
            "The 80386 further advanced to 32-bit architecture, 32-bit addressing, and support for virtual memory and paging, enabling up to 4 GB of memory.",
          ],
          bullets: [
            "80286: 16-bit data bus, 24-bit address bus, 16 MB memory, real and protected modes.",
            "80386: 32-bit data bus, 32-bit address bus, 4 GB memory, real/protected/virtual modes, paging.",
            "Both processors improved multitasking, memory management, and system speed over the 8086.",
          ],
          note: "Use the feature comparison to highlight clear advancement.",
        },
      },
    ],
  },
];

export default function SolutionPageClient() {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);
  const [loadingAccess, setLoadingAccess] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkAccess = async () => {
      setLoadingAccess(true);
      setStatusMessage(null);

      try {
        const supabase = getSupabaseClient();
        const sessionResult = await supabase.auth.getSession();
        const token = sessionResult.data.session?.access_token;
        setAuthenticated(Boolean(token));

        const response = await fetch("/api/check-access", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ subjectSlug: SUBJECT_ID }),
        });

        const result = await response.json();
        setHasAccess(result.access === true);
      } catch (error) {
        console.error("MPI access check failed", error);
        setHasAccess(false);
      } finally {
        setLoadingAccess(false);
      }
    };

    checkAccess();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }
      const percent = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUnlock = async () => {
    if (checkoutLoading) {
      return;
    }

    const supabase = getSupabaseClient();
    const sessionResult = await supabase.auth.getSession();
    const token = sessionResult.data.session?.access_token;

    if (!token) {
      router.push(`/login?next=/solutions/microprocessor-and-interfacing/mpi-winter-2025-solution`);
      return;
    }

    setCheckoutLoading(true);
    setStatusMessage(null);

    try {
      const createResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subjectId: SUBJECT_ID, amount: PRICE }),
      });

      const createData = await createResponse.json();
      if (!createResponse.ok || !createData.orderId) {
        throw new Error(createData.error || "Unable to start payment.");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: createData.amount,
        currency: "INR",
        name: "GTU Premium Solutions",
        description: "MPI Winter 2025 premium access",
        order_id: createData.orderId,
        handler: async (paymentResponse: any) => {
          try {
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();
            if (verifyResponse.ok && verifyData.success) {
              setHasAccess(true);
              setStatusMessage("Premium access unlocked. Scroll to continue.");
            } else {
              const errorText = verifyData.error || "Payment verification failed.";
              setStatusMessage(errorText);
            }
          } catch (verifyError) {
            console.error("MPI payment verify failed", verifyError);
            setStatusMessage("Payment verification failed. Please try again.");
          }
        },
        modal: {
          ondismiss: () => {
            setCheckoutLoading(false);
            setStatusMessage("Checkout closed. Try again to unlock premium answers.");
          },
        },
      } as any;

      const RazorpayConstructor = (window as any).Razorpay;
      if (!RazorpayConstructor) {
        throw new Error("Payment gateway failed to load. Refresh and try again.");
      }

      const razorpay = new RazorpayConstructor(options);
      razorpay.open();
    } catch (error: any) {
      console.error("MPI payment error", error);
      setStatusMessage(error?.message || "Unable to process payment.");
      setCheckoutLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="sticky top-0 z-40 h-1.5 bg-slate-900">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-32 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/80 p-6 shadow-2xl shadow-black/40 sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-200 ring-1 ring-emerald-500/20">
                MICROPROCESSOR AND INTERFACING (3160712)
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Winter 2025 Solution
                </h1>
                <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  Premium interactive GTU solution page for MPI Winter 2025. Expand question sections to reveal structured subparts, then unlock the full answers to access premium exam-ready explanations.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Access status</p>
                  <p className="text-sm text-slate-300">
                    {hasAccess
                      ? "Your account has full access to the MPI premium solution."
                      : "Question 1 is free. Unlock premium subparts for the complete paper."}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-slate-700">
                    ₹{PRICE}
                  </span>
                  {!hasAccess && (
                    <button
                      type="button"
                      onClick={handleUnlock}
                      disabled={checkoutLoading}
                      className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {checkoutLoading ? "Opening checkout..." : "Unlock Full Paper"}
                    </button>
                  )}
                </div>
              </div>
              {statusMessage ? (
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
                  {statusMessage}
                </div>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 text-sm text-slate-300 shadow-2xl shadow-black/20 sm:w-[340px]">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-400">Paper snapshot</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-3xl bg-slate-900/90 px-4 py-3">
                  <p className="text-sm text-slate-400">Subject</p>
                  <p className="mt-1 font-medium text-white">Microprocessor and Interfacing</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 px-4 py-3">
                  <p className="text-sm text-slate-400">Paper</p>
                  <p className="mt-1 font-medium text-white">Winter 2025</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 px-4 py-3">
                  <p className="text-sm text-slate-400">Structure</p>
                  <p className="mt-1 font-medium text-white">Q1–Q5 with premium subparts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="solution-accordion-heading" className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Interactive Solution</p>
                <h2 id="solution-accordion-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Browse exam-ready MPI sections
                </h2>
              </div>
              <div className="rounded-3xl bg-slate-900 px-4 py-3 text-sm text-slate-300 ring-1 ring-slate-700">
                Collapsible questions & premium answers
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              Expand each section to view sub-questions and detailed reasoning. Question 1 is always free; the remaining answers are locked until premium access is activated.
            </p>
          </div>

          {QUESTIONS.map((question) => (
            <QuestionAccordion
              key={question.id}
              id={question.id}
              title={question.title}
              summary={question.summary}
              free={question.free}
              subQuestions={question.subQuestions}
              locked={!question.free && !hasAccess}
              hasAccess={hasAccess}
              onUnlock={handleUnlock}
              loading={checkoutLoading}
            />
          ))}
        </section>

        {!hasAccess && !loadingAccess ? (
          <div className="mt-10">
            <PremiumLockCard
              onUnlock={handleUnlock}
              loading={checkoutLoading}
              authenticated={authenticated}
            />
          </div>
        ) : null}
      </div>

      {!hasAccess ? (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/95 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden">
          <div>
            <p className="text-sm font-semibold text-white">Unlock full MPI answers</p>
            <p className="text-xs text-slate-400">₹{PRICE} one-time</p>
          </div>
          <button
            type="button"
            onClick={handleUnlock}
            disabled={checkoutLoading}
            className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {checkoutLoading ? "Processing..." : "Unlock Premium"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
