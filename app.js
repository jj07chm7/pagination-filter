
// Return number of pages needed, based on number of students
function numberOfPages(studentList) {
  const numStudents = studentList.length;
  let numPages;
  // Need to account for pages with less than 10 students
   if (numStudents % 10 > 0) {
     numPages = Math.floor((numStudents / 10) + 1);
   } else {
     numPages = numStudents / 10;
   }
   return numPages;
}

// Return which students should be displayed
function showPage(pageNumber, studentList) {
  // Hide student list
  studentList.remove();
  // Based on page number, determine which subset of students
  // to show
  for (let i = 0; i < studentList.length; i++) {
    if (i < pageNumber * 10 && i >= pageNumber * 10 - 10) {
      $('.student-list').append(studentList[i]);
    }
  }
}

// Generate pagination links
function generatePaginationLinks(numberOfPages) {
  $('.page').append('<div class="pagination"><ul></ul></div>');
  let i = 1;
  // Append page links to unordered list under pagination class
  while (numberOfPages >= i) {
    $('.pagination ul').append('<li><a href="#">' + i + '</a></li>');
    i++;
  }
}

// Get list of students
const students = $('.student-item');
// Return number of pages needed
let studentNumber = numberOfPages(students);
// Show first 10 students
showPage(1, students);
// Create pagination links
generatePaginationLinks(studentNumber);

// Event listener for clicking on page numbers
$('.pagination a').on('click', function(event) {
  let pageNumber = $(this)[0].innerText;
  showPage(parseInt(pageNumber), students);
})
