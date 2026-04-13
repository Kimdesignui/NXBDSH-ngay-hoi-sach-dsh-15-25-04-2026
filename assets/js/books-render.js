(function () {
  var books = Array.isArray(window.BOOKS_DATA) ? window.BOOKS_DATA : [];
  var grid = document.getElementById("booklist-grid");
  var title = document.getElementById("booklist-title");
  if (title) {
    title.textContent = "TR\u00c2N TR\u1eccNG GI\u1edaI THI\u1ec6U T\u1edaI B\u1ea0N \u0110\u1eccC";
  }
  if (!grid) return;

  var fragment = document.createDocumentFragment();

  books.forEach(function (book) {
    var col = document.createElement("div");
    col.className = "col-6 col-sm-6 col-md-3 col-lg-2 text-center pt-2";
    col.title = book.title;

    var coverWrap = document.createElement("div");
    coverWrap.className = "book-cover-wraper";

    var coverLink = document.createElement("a");
    coverLink.href = book.detailUrl;
    coverLink.target = "_blank";
    coverLink.rel = "noopener noreferrer";

    var coverImg = document.createElement("img");
    coverImg.className = "w-100";
    coverImg.src = book.imageUrl;
    coverImg.alt = book.title;
    coverImg.style.borderRadius = "5px";
    coverLink.appendChild(coverImg);
    coverWrap.appendChild(coverLink);

    var btnGroup = document.createElement("div");
    btnGroup.className = "btn-group btn-group-sm d-lg-flex d-xl-flex justify-content-lg-center justify-content-xl-center my-2";
    btnGroup.setAttribute("role", "group");
    btnGroup.style.whiteSpace = "nowrap";

    var readBtn = document.createElement("a");
    readBtn.className = "btn btn-primary p-1";
    readBtn.href = book.readUrl;
    readBtn.target = "_blank";
    readBtn.rel = "noopener noreferrer";
    readBtn.textContent = "\u0110\u1ecdc ngay";

    var detailBtn = document.createElement("a");
    detailBtn.className = "btn btn-outline-primary p-1";
    detailBtn.href = book.detailUrl;
    detailBtn.target = "_blank";
    detailBtn.rel = "noopener noreferrer";
    detailBtn.textContent = "Gi\u1edbi thi\u1ec7u";

    btnGroup.appendChild(readBtn);
    btnGroup.appendChild(detailBtn);

    var titleLink = document.createElement("a");
    titleLink.className = "text-decoration-none text-black-50";
    titleLink.href = book.readUrl;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";

    var title = document.createElement("p");
    title.className = "fs-6 p-2 my-0 book-title-link";
    title.style.lineHeight = "1.3em";
    title.title = book.title;
    title.textContent = book.title;
    titleLink.appendChild(title);

    col.appendChild(coverWrap);
    col.appendChild(btnGroup);
    col.appendChild(titleLink);
    fragment.appendChild(col);
  });

  grid.replaceChildren(fragment);
})();
