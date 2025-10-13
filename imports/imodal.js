// imodal.js
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("imodal");
  if (!container) return;

  // Fetch and inject the HTML
  const html = await (await fetch("../imports/imodal.html")).text();
  container.innerHTML = html;

  // Now hook up event listeners
  const contactBtn   = container.querySelector("#contactBtn");
  const infoBtn      = container.querySelector("#infoBtn");
  const modal        = container.querySelector("#floatingModal");
  const modalContent = container.querySelector("#modalContent");
  const closeModal   = container.querySelector("#closeModal");
  const sections     = container.querySelectorAll("section");

  if (!contactBtn || !infoBtn || !modal || !modalContent || !closeModal || sections.length < 2) return;

  // Contact modal
  contactBtn.addEventListener("click", () => {
    modalContent.innerHTML = sections[0].innerHTML;
    modal.classList.remove("hidden");
  });

  // Info modal
  infoBtn.addEventListener("click", () => {
    modalContent.innerHTML = sections[1].innerHTML;
    modal.classList.remove("hidden");
  });

  // Close modal
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
