$(function () {
  // Load navbar first
  $("#navbar").load("navbar.html", function () {
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter") || "preface";

    // Remove all 'active' classes first
    $(".dropdown-item").removeClass("active");

    // Add 'active' class to the matching item
    $(`#link-${chapter}`).addClass("active");
  });

  // Load chapter content
  const params = new URLSearchParams(window.location.search);
  const chapter = params.get("chapter");
  const chapterPath = chapter
    ? `chapters/${chapter}.html`
    : `chapters/preface.html`;

  $("#chapter-content").load(chapterPath, function (response, status, xhr) {
    if (status === "error") {
      $("#chapter-content").html(`
        <div class="alert alert-danger">
          <strong>Content not found:</strong> <code>${chapterPath}</code><br>
          ${xhr.status} ${xhr.statusText}
        </div>`);
    } else {
      hljs.highlightAll();
    }
  });
});
