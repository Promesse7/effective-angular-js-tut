document.getElementById('my-appointment').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const inputs = [
      document.getElementById('gname'),
      document.getElementById('gmail'),
      document.getElementById('cname'),
      document.getElementById('cage'),
      document.getElementById('message')
    ];
  
    // Validate inputs
  const invalidInputs = inputs.filter(input => !input.checkValidity());

  if (invalidInputs.length > 0) {
    let errorMessage = 'Some inputs are invalid:\n';
    invalidInputs.forEach(input => {
      errorMessage += `- ${input.id} is invalid\n`;
    });
    alert(errorMessage);
  } else {
    alert('All inputs are valid.');
    // Perform form submission or other actions
  }
});
const cage = inputs[3];
const message = inputs[4];


  