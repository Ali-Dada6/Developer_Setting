let books = [];
  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('يرجى ملء جميع الحقول بشكل صحيح.');
            }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>رقم الكتاب: ${index + 1}</h1>
        <p><strong>اسم الكتاب: </strong>${book.name}</p>
        <p><strong>اسم المؤلف:</strong> ${book.authorName}</p>
        <p><strong>وصف الكتاب:</strong> ${book.bookDescription}</p>
        <p><strong>عدد الصفحات:</strong> ${book.pagesNumber} صفحة(صفحات)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
        document.getElementById('bookName').value = '';
        document.getElementById('authorName').value = '';
        document.getElementById('bookDescription').value = '';
        document.getElementById('pagesNumber').value = '';
}

