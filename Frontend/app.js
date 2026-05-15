// document.addEventListener("DOMContentLoaded", () => {
//   const questionEl    = document.querySelector("#question");
//   const askBtn        = document.querySelector("#ask-btn");
//   const statusEl      = document.querySelector("#status");
//   const answerEl      = document.querySelector("#answer");
//   const answerTextEl   = document.querySelector("#answer-text");
//   const qtypePill     = document.querySelector("#type-pill");
//   const toolPill      = document.querySelector("#tool-pill");
//   const sourcesEl      = document.querySelector("#sources-wrap");
//   const sourcesListEl = document.querySelector("#sources");

//     //Upload File code
//     const pdfInput = document.querySelector("#pdf-input");
//     const uploadStatus = document.querySelector("#upload-status");

//     pdfInput.addEventListener("change", handleUpload);

//     function handleUpload() {

//         const file = pdfInput.files[0];

//         if (!file) {
//             uploadStatus.textContent = "";
//             uploadStatus.className = "text-sm text-slate-500";
//             return;
//         }

//         uploadStatus.textContent = `Uploading ${file.name}...`;
//         uploadStatus.className = "text-sm text-green-600 mt-2";

//         // Create form data
//         const fd = new FormData();
//         fd.append("file", file);

//         console.log("File added to FormData:");
//         console.log(fd);

//         // Optional: show success after 2 seconds
//         setTimeout(() => {
//             uploadStatus.textContent =
//                 `${file.name} uploaded successfully!`;

//             uploadStatus.className =
//                 "text-sm text-blue-600 mt-2";
//         }, 2000);
//     }

//     function resetAnswerUI() {
//         answerTextEl.textContent = "Your answer will appear here...";
//         qtypePill.classList.add("hidden");
//         toolPill.classList.add("hidden");
//         sourcesEl.classList.add("hidden");
//         sourcesListEl.innerHTML = "";
//         statusEl.textContent = "";
//     }

//     askBtn.addEventListener("click", () => {
//         const text = questionEl.value.trim();

//         if (!text) {

//         resetAnswerUI();

//         statusEl.textContent = "Please type a question first.";

//         statusEl.className = "text-sm text-red-500 mt-2 min-h-[1.25rem]";

//         return;
//         }

//         //Loading
//         resetAnswerUI();

//         statusEl.textContent = "Thinking...";

//         statusEl.className = "text-sm text-gray-500 mt-2 min-h-[1.25rem]";

//         // Simulate backend delay
//         setTimeout(() => {

//             // Step 4 — Determine Placeholder Question Type

//         let placeholderType = "definition";

//         const lowerText = text.toLowerCase();

//         if (lowerText.startsWith("what is")) {

//             placeholderType = "definition";

//         }

//         else if (
//         lowerText.startsWith("give") ||
//         lowerText.includes("example")
//         ) {

//         placeholderType = "example";

//         }

//         else if (
//         lowerText.includes("vs") ||
//         lowerText.includes("versus") ||
//         lowerText.includes("compare") ||
//         lowerText.includes("difference")
//         ) {

//         placeholderType = "comparison";

//         }
        
//         // Step 5 — Determine Placeholder Tool

//         let placeholderTool = "search_notes";

//         const calculatorPattern = /^[\d\s+\-*/().]+$/;

//         if (calculatorPattern.test(text)) {

//             placeholderTool = "calculator";

//         }
//         // Step 6 — Build Placeholder Answer

//         const placeholderAnswer = `Placeholder answer for: "${text}". Real answers will appear here once the backend is connected.`;

//         // Step 7 — Populate UI

//         const QTYPE_COLORS = {
//             definition: "bg-blue-100 text-blue-700",
//             example: "bg-green-100 text-green-700",
//             comparison: "bg-purple-100 text-purple-700"
//         };

//         // Answer Text
//         answerTextEl.textContent = placeholderAnswer;

//         // Question Type Pill
//         qtypePill.textContent = `type: ${placeholderType}`;

//         qtypePill.className =
//             `px-2 py-1 rounded text-xs ${QTYPE_COLORS[placeholderType]}`;

//         qtypePill.classList.remove("hidden");

//         // Tool Pill
//         toolPill.textContent =
//             `tool: ${placeholderTool}`;

//         toolPill.className =
//             "px-2 py-1 rounded text-xs bg-slate-200 text-slate-700";

//         toolPill.classList.remove("hidden");

//         // Calculator Path Behavior
//         if (placeholderTool === "calculator") {

//             sourcesEl.classList.add("hidden");

//         }

//         else {

//             sourcesEl.classList.remove("hidden");

//             // Sources List
//             const source1 = document.createElement("li");
//             source1.textContent =
//                 "Sample source chunk 1 — example excerpt from the uploaded notes.";

//             const source2 = document.createElement("li");
//             source2.textContent =
//                 "Sample source chunk 2 — another excerpt.";

//             const source3 = document.createElement("li");
//             source3.textContent =
//                 "Sample source chunk 3 — final excerpt.";

//             sourcesListEl.appendChild(source1);
//             sourcesListEl.appendChild(source2);
//             sourcesListEl.appendChild(source3);

//         }

//     // Reveal Final UI
//     answerEl.classList.remove("hidden");

//     statusEl.textContent = "";

           
//         }, 600);
//     });

// });


document.addEventListener("DOMContentLoaded", () => {

    const questionEl = document.querySelector("#question");
    const askBtn = document.querySelector("#ask-btn");
    const statusEl = document.querySelector("#status");
    const answerEl = document.querySelector("#answer");
    const answerTextEl = document.querySelector("#answer-text");
    const qtypePill = document.querySelector("#type-pill");
    const toolPill = document.querySelector("#tool-pill");
    const sourcesEl = document.querySelector("#sources-wrap");
    const sourcesListEl = document.querySelector("#sources");

    // Upload File Code
    const pdfInput = document.querySelector("#pdf-input");
    const uploadStatus = document.querySelector("#upload-status");

    pdfInput.addEventListener("change", handleUpload);

    function handleUpload() {

        const file = pdfInput.files[0];

        if (!file) {

            uploadStatus.textContent = "";

            uploadStatus.className =
                "text-sm text-slate-500";

            return;
        }

        uploadStatus.textContent =
            `Uploading ${file.name}...`;

        uploadStatus.className =
            "text-sm text-green-600 mt-2";

        // Create form data
        const fd = new FormData();

        fd.append("file", file);

        // Optional success simulation
        setTimeout(() => {

            uploadStatus.textContent =
                `${file.name} uploaded successfully!`;

            uploadStatus.className =
                "text-sm text-blue-600 mt-2";

        }, 2000);
    }

    function resetAnswerUI() {

        answerTextEl.textContent =
            "Your answer will appear here...";

        qtypePill.classList.add("hidden");

        toolPill.classList.add("hidden");

        sourcesEl.classList.add("hidden");

        answerEl.classList.add("hidden");

        sourcesListEl.innerHTML = "";

        statusEl.textContent = "";
    }

    askBtn.addEventListener("click", () => {

        const text = questionEl.value.trim();

        // Step 1 — Validation
        if (!text) {

            resetAnswerUI();

            statusEl.textContent =
                "Please type a question first.";

            statusEl.className =
                "text-sm text-red-500 mt-2 min-h-[1.25rem]";

            return;
        }

        // Step 2 — Loading State
        resetAnswerUI();

        statusEl.textContent = "Thinking...";

        statusEl.className =
            "text-sm text-gray-500 mt-2 min-h-[1.25rem]";

        // Step 3 — Simulated Backend Delay
        setTimeout(() => {

            // Step 4 — Determine Placeholder Question Type

            let placeholderType = "definition";

            const lowerText = text.toLowerCase();

            if (lowerText.startsWith("what is")) {

                placeholderType = "definition";
            }

            else if (
                lowerText.startsWith("give") ||
                lowerText.includes("example")
            ) {

                placeholderType = "example";
            }

            else if (
                lowerText.includes("vs") ||
                lowerText.includes("versus") ||
                lowerText.includes("compare") ||
                lowerText.includes("difference")
            ) {

                placeholderType = "comparison";
            }

            // Step 5 — Determine Placeholder Tool

            let placeholderTool = "search_notes";

            const calculatorPattern =
                /^[\d\s+\-*/().]+$/;

            if (calculatorPattern.test(text)) {

                placeholderTool = "calculator";
            }

            // Step 6 — Build Placeholder Answer

            const placeholderAnswer =
                `Placeholder answer for: "${text}". Real answers will appear here once the backend is connected.`;

            // Step 7 — Populate UI

            const QTYPE_COLORS = {
                definition: "bg-blue-100 text-blue-700",
                example: "bg-green-100 text-green-700",
                comparison: "bg-purple-100 text-purple-700"
            };

            // Answer Text
            answerTextEl.textContent =
                placeholderAnswer;

            // Question Type Pill
            qtypePill.textContent =
                `type: ${placeholderType}`;

            qtypePill.className =
                `px-2 py-1 rounded text-xs ${QTYPE_COLORS[placeholderType]}`;

            qtypePill.classList.remove("hidden");

            // Tool Pill
            toolPill.textContent =
                `tool: ${placeholderTool}`;

            toolPill.className =
                "px-2 py-1 rounded text-xs bg-slate-200 text-slate-700";

            toolPill.classList.remove("hidden");

            // Calculator Path Behavior
            if (placeholderTool === "calculator") {

                sourcesEl.classList.add("hidden");
            }

            else {

                sourcesEl.classList.remove("hidden");

                // Sources List
                const source1 =
                    document.createElement("li");

                source1.textContent =
                    "Sample source chunk 1 — example excerpt from the uploaded notes.";

                const source2 =
                    document.createElement("li");

                source2.textContent =
                    "Sample source chunk 2 — another excerpt.";

                const source3 =
                    document.createElement("li");

                source3.textContent =
                    "Sample source chunk 3 — final excerpt.";

                sourcesListEl.appendChild(source1);
                sourcesListEl.appendChild(source2);
                sourcesListEl.appendChild(source3);
            }

            // Reveal Final UI
            answerEl.classList.remove("hidden");

            statusEl.textContent = "";

        }, 600);

    });

});
