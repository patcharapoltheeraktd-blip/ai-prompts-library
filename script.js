// ====== Sample prompt data ======
const promptsData = [
    {
        id: 1,
        title: "สร้างแผนการจัดการเรียนรู้",
        description:
            "สร้างแผนการสอนสำหรับครูผู้สอน",
        category: "การสอน",
        aiPlatform: "Gemini",
        prompt:
            "กำหนดให้คุณเป็นผู้เชี่ยวชาญในด้านการเขียนแผนการสอน กรุณาช่วยสร้างแผนการสอนตามข้อมูลที่ให้" +
            "\n\nข้อมูลพื้นฐาน" +
            "\nวิชา           : [ชื่อวิชา]" +
            "\nหนังสือที่ใช้สอน  : [ชื่อหนังสือ]" +
            "\nระดับชั้น        : [ระดับชั้นที่สอน]" +
            "\nหน่วยการเรียนรู้   : [ชื่อหน่วยการเรียนรู้]" +
            "\nเวลาที่ใช้        : [จำนวนชั่วโมงที่ใช้สอนในหน่วยนี้]" +
            "\nเรื่อง           : [ชื่อเรื่อง]" +
            "\nเวลาที่ใช้        : [จำนวนชั่วโมงที่ใช้สอนในเรื่องนี้]" +
            "\nจำนวนนักเรียน    : [จำนวนนักเรียน]" +
            "\nมาตรฐานการเรียนรู้ : [มาตรฐานการเรียนรู้ (เช่น ว 4.2 เทคโนโลยี(วิทยาการคำนวณ)]" +
            "\n กรุณาสร้างแผนการสอนที่ประกอบด้วยดังนี้" +
            "\n\n1. มาตรฐานการเรียนรู้" +
            "\n- ให้อิงมาตรฐานการเรียนรู้จากหลักสูตรแกนกลางฯ พ.ศ. 2551 และมาตรฐานการเรียนรู้และตัวชี้วัดฯ (ฉบับปรับปรุง พ.ศ. 2560)" +
            "\n\n2. ตัวชี้วัด" +
            "\n- ให้แบ่งออกเป็น “ตัวชี้วัดระหว่างทาง” และ “ตัวชี้วัดปลายทาง”" +
            "\n\t- ตัวชี้วัดระหว่างทาง คือ ตัวชี้วัดระหว่างการจัดการเรียนรู้ (ถ้าไม่มีให้ใส่ \"-\")" +
            "\n- ตัวชี้วัดปลายทาง คือ การวัดผลลัพธ์สุดท้ายที่ต้องการให้เกิดกับผู้เรียน (ถ้าไม่มีให้ใส่ \"-\")" +
            "\n- ให้เชื่อมโยงกับมาตรฐานการเรียนรู้หลักสูตรแกนกลางฯ พ.ศ. 2551 และมาตรฐานการเรียนรู้และตัวชี้วัดฯ (ฉบับปรับปรุง พ.ศ. 2560) และใช้ตัวชี้วัดที่สอดคล้องกับเนื้อหาภายในแผนเท่านั้น" +
            "\n- ให้อิงข้อมูลตามเว็บไซต์ของ “สำนักงานวิชาการและมาตรฐานการศึกษา” ในหัวข้อ หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 และมาตรฐานการเรียนรู้และตัวชี้วัดฯ (ฉบับปรับปรุง พ.ศ. 2560)" +
            "\n\n3. ตัวบ่งชี้" +
            "\n- ให้ระบุเกณฑ์การประเมินผลการเรียนรู้ของผู้เรียนในแผนการเรียนรู้ โดยแบ่งออกเป็น ด้านความรู้ (K) ด้านทักษะกระบวนการ (P) และด้านคุณลักษณะ (A)" +
            "\n- ให้เชื่อมโยงกับมาตรฐานการเรียนรู้" +
            "\n- ให้พิจารณาคำกริยาให้บ่งบอกพฤติกรรมการเรียนรู้ KPA แบบของเว็บไซต์ sildeshare ของ “ณัฐพล แสงทวี”" +
            "\n\n4. ความคิดรวบยอด" +
            "\n\t- ให้สรุปความรู้ที่นักเรียนจะได้รับในการจัดการเรียนรู้" +
            "\n\n5. สาระการเรียนรู้" +
            "\n- ให้สรุปเนื้อหาที่นักเรียนจะได้เรียนรู้ออกมาเป็นข้อ ๆ" +
            "\n\n6. สาระสำคัญ" +
            "\n- สรุปเนื้อหาหลัก (เช่น การสื่อสาร, การคิด, การแก้ปัญหา, ทักษะชีวิต, เทคโนโลยี)" +
            "\n\n7. คุณลักษณะอันพึงประสงค์" +
            "\n\t- ระบุคุณลักษณะที่นักเรียนจะได้รับในการเรียน (เช่น รักชาติ ศาสน์ กษัตริย์, ซื่อสัตย์สุจริต, มีวินัย, ใฝ่เรียนรู้, อยู่อย่างพอเพียง, มุ่งมั่นในการทำงาน, รักความเป็นไทย, มีจิตสาธารณะ)" +
            "\n\n8. กระบวนการจัดการเรียนรู้ (แบ่งเป็น 5E พร้อมทั้งรายละเอียด)" +
            "\n\t- ขั้นสร้างความสนใจ (Engagement)" +
            "\n\t- สำรวจและค้นหา (Exploration)" +
            "\n\t- อธิบายและลงข้อสรุป (Explanation)" +
            "\n\t- ขยายความรู้ (Elaboration)" +
            "\n\t- ประเมิน (Evaluation)" +
            "\n\t***ให้เน้นผู้เรียนเป็นสำคัญ" +
            "\n\t***หากมีคำการถามคำถามให้เพิ่มแนวคำตอบด้วย" +
            "\n\n9. การวัดและประเมินผล" +
            "\n- ให้สร้างการประเมินผลแบบรูบิค โดยมีหัวข้อดังนี้ สิ่งที่ต้องการวัด, วิธีการวัด, เครื่องมือการวัด, เกณฑ์การประเมิน" +
            "\n\n10. สื่อการเรียนการสอน/แหล่งเรียนรู้" +
            "\n\t- แหล่งเรียนรู้และอุปกรณ์ที่ใช้" +
            "\n\t- เทคโนโลยีที่เหมาะสม" +
            "\n\n11. การบริหารจัดการชั้นเรียน" +
            "\n\t- การจัดที่นั่ง/การจัดกลุ่ม" +
            "\n\t- การจัดการเวลา",
    },
    {
        id: 2,
        title: "การสร้างสื่อประเภทเกม",
        description:
            "สำหรับสร้างสื่อเกม เพื่อไว้สำหรับกระตุ้นความสนใจของผู้เรียน",
        category: "กระตุ้นความสนใจ",
        aiPlatform: "Canva AI",
        prompt:
            "กำหนดให้คุณเป็นผู้เชี่ยวชาญด้านการออกแบบสื่อการสอนประเภทเกม โดยมีรายละเอียดดังนี้" +
            "\nสร้างสื่อการเรียนรู้ประเภทเกม: [เกมการ์ด/บิงโก/เกมเศรษฐี/...]" +
            "\nเกี่ยวกับ: [หัวข้อ/เนื้อหาวิชา]" +
            "\nสำหรับ: [กลุ่มเป้าหมาย]" +
            "\nจำนวนนักเรียน: [จำนวนผู้ใช้งาน]" +
            "\n\nออกแบบในสไตล์: [chibi, flat design, infographic, 3D, pixel art, ...]" +
            "\nโทนสี: [สดใส, พาสเทล, จริงจัง, มินิมอล, ...]" +
            "\n\nรายละเอียดเพิ่มเติม:" +
            "\n- ฟอนต์: [ชื่อฟอนต์]" +
            "\n- ไอคอน/สัญลักษณ์: [เช่น ดินสอ, หนังสือ, หลอดไฟ, ...]" +
            "\n- ฉากหลัง: [โปร่งใส / มีลวดลาย / สมจริง ฯลฯ]" +
            "\n- ภาษา: [ไทย / อังกฤษ / ...]" +
            "\n- ข้อความแนะนำ/คำอธิบาย: [ต้องการข้อความสั้น ๆ หรือไม่มี]" +
            "\n\nเน้นให้ออกแบบให้เหมาะสมกับการเรียนรู้ มีความน่าสนใจ เข้าใจง่าย และสอดคล้องกับกลุ่มผู้เรียน",
    },
    {
        id: 3,
        title: "การสร้างสื่อการสอน",
        description:
            "ฟิกเกอร์การ์ตูน 3D",
        category: "กระตุ้นความสนใจ",
        aiPlatform: "Gemini",
        prompt:
            "สร้างฟิกเกอร์การ์ตูน 3D แบบตัวเต็ม (Full-body) โดยอิงตัวอย่างจากภาพที่ส่งให้ ในสไตล์ชิบิ (Chibi) ของนักเรียนไทย ที่มีลักษณะน่ารัก ร่าเริง ตัวละครมีหัวโต ดวงตากลมโต มีรอยยิ้มสดใส ยืนอยู่บนฐานสีน้ำตาลรูปวงกลม ด้านหน้าฐานมีป้ายติดชื่ออาชีพเป็นภาษาอังกฤษว่า 'Student' อย่างชัดเจน แต่งกายด้วยชุดที่เหมาะสมและถืออุปกรณ์ที่เกี่ยวข้องกับการเรียน ฉากหลังเป็นพื้นสีฟ้าไล่เฉดเกรเดียนอย่างนุ่มนวล งานออกแบบต้องมีสีสันสดใส ผิวงานเรียบเนียน และสื่อถึงความน่ารัก เป็นมิตร",
            
    }
];

// ====== DOM elements ======
const searchInput = document.getElementById("searchInput");
const cardsGrid = document.getElementById("cardsGrid");
const noResults = document.getElementById("noResults");

// ====== Render a single card ======
function createPromptCard(prompt) {
    return `
    <div class="prompt-card" 
         data-title="${prompt.title.toLowerCase()}" 
         data-description="${prompt.description.toLowerCase()}" 
         data-category="${prompt.category.toLowerCase()}">
      <div class="card-header">
        <span class="card-category">${prompt.category}</span>
        <span class="ai-platform">${prompt.aiPlatform}</span>
      </div>
      <h3 class="card-title">${prompt.title}</h3>
      <p class="card-description">${prompt.description}</p>
      <div class="prompt-section">
        <div class="prompt-label">Prompt:</div>
        <div class="prompt-text">${prompt.prompt}</div>
        <button class="copy-btn" onclick="copyPrompt('${prompt.id}', this)">📋 Copy Prompt</button>
      </div>
    </div>
  `;
}

// ====== Render cards ======
function renderCards(prompts = promptsData) {
    if (!prompts || prompts.length === 0) {
        cardsGrid.style.display = "none";
        noResults.style.display = "block";
        return;
    }
    cardsGrid.style.display = "grid";
    noResults.style.display = "none";
    cardsGrid.innerHTML = prompts.map(createPromptCard).join("");
}

// ====== Filter cards by search ======
function filterCards() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === "") {
        renderCards(promptsData);
        return;
    }
    const filtered = promptsData.filter((p) =>
        [p.title, p.description, p.category]
            .map((x) => x.toLowerCase())
            .some((t) => t.includes(searchTerm))
    );
    renderCards(filtered);
}

// ====== Copy prompt ======
function copyPrompt(promptId, buttonElement) {
    const prompt = promptsData.find((p) => String(p.id) === String(promptId));
    if (!prompt) return;

    const onCopiedUI = () => {
        const original = buttonElement.innerHTML;
        buttonElement.innerHTML = "✅ คัดลอกแล้ว!";
        buttonElement.classList.add("copied");
        setTimeout(() => {
            buttonElement.innerHTML = original;
            buttonElement.classList.remove("copied");
        }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prompt.prompt).then(onCopiedUI);
    } else {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = prompt.prompt;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        onCopiedUI();
    }
}

// ทำให้เรียกใช้จาก onclick ได้
window.copyPrompt = copyPrompt;

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    searchInput.addEventListener("input", filterCards);
});
