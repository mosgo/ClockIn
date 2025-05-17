$(document).ready(function() {
    // Saves note into local Chrome storage
    chrome.storage.local.get(['savedNote'], function(result) {
        if (result.savedNote) {
            $('#note').text(result.savedNote).show();
        }
    });

    // DOMContentLoaded 
    $('#submitBtn').click(function() {
        var inputText = $('#noteInput').val().trim(); // Get the value from the textbox

        if (inputText) {
            // If there is text, insert it into the note div and show the div
            $('#note').text(inputText).show();

            // Save note to storage
            chrome.storage.local.set({ savedNote: inputText }), function() {
                alert('Saved new note: ', inputText);
            }
        } else {
            // If the input is empty, hide the note div
            $('#note').hide();
            chrome.storage.local.remove('savedNote', function(){
            console.log('Note destroyed');
            });
        }

        // Clear the textbox after submission
        $('#noteInput').val('');
    });
});

// Handles variables and formatting for when the user adds a note
function noteAdd() {
const input = document.getElementById('enterNote').value;
const note = document.getElementById('note');

if(input.trim()) {
    note.textContent = input;
    note.style.display = 'block';
} else {
    note.textContent = '';
    note.style.display = 'none';
}

document.getElementById('enterNote').value = '';
}

// Displays the current time
function updateTime(){
    const currentTime = new Date();

    const time = currentTime.toLocaleString();

    document.querySelector('#clock').textContent = time;
    setInterval(updateTime, 1000);
}

// Inserts clock into the page
updateTime();