document.getElementById('add-outcome').addEventListener('click', function () {
    const outcomesContainer = document.querySelector('.form-group #learning-outcome-1').parentNode;
    const newOutcome = document.createElement('input');
    newOutcome.type = 'text';
    newOutcome.name = 'learning-outcomes[]';
    newOutcome.placeholder = `Outcome ${document.querySelectorAll('[name="learning-outcomes[]"]').length + 1}`;
    newOutcome.className = 'form-group-input';  // Add this line to apply styles
    outcomesContainer.insertBefore(newOutcome, this);
});

document.getElementById('evaluation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // You can add logic here to handle form submission, such as sending the form data to a server or generating a PDF.
});
