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
            pagesNumber: pagesNumber,
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('يرجى ملء جميع الحقول بشكل صحيح.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `
        <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
            <h1>رقم الكتاب: ${index + 1}</h1>
            <p><strong>اسم الكتاب: </strong>${book.name}</p>
            <p><strong>اسم المؤلف:</strong> ${book.authorName}</p>
            <p><strong>وصف الكتاب:</strong> ${book.bookDescription}</p>
            <p><strong>عدد الصفحات:</strong> ${book.pagesNumber} صفحة(صفحات)</p>
            <button onclick="deleteBook(${index})" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">حذف</button>
        </div>
    `);
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deleteBook(index) {
    books.splice(index, 1); // حذف الكتاب من المصفوفة
    showbooks(); // تحديث القائمة
}
