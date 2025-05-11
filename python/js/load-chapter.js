$(function () {
  // Load navbar
  $("#navbar").load("navbar.html", function () {
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter") || "preface";

    $(".dropdown-item").removeClass("active");

    if (chapter === "preface") {
      $("#link-preface").addClass("active");
    } else {
      $(`#link-${chapter}`).addClass("active");
    }
  });

  // Load chapter content
  const params = new URLSearchParams(window.location.search);
  const chapter = params.get("chapter");
  const contentFile = chapter
    ? `chapters/${chapter}.html`
    : `chapters/preface.html`;

  $("#chapter-content").load(contentFile, function (response, status, xhr) {
    if (status === "error") {
      $("#chapter-content").html(`
        <div class="alert alert-danger">
          <strong>Content not found:</strong> <code>${contentFile}</code><br>
          ${xhr.status} ${xhr.statusText}
        </div>`);
    } else {
      hljs.highlightAll();
    }
  });
});
