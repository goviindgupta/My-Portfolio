const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

// Add or remove 'dragging' class during drag events
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Handle the dragover event for each container
containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default behavior to allow dropping
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.appendChild(draggable); // Append if no element is found
        } else {
            container.insertBefore(draggable, afterElement); // Insert before the closest element
        }
    });
});

// Function to find the closest draggable element below the mouse pointer
const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce(
        (closest, child) => {
            const box = child.getBoundingClientRect(); // Get bounding box of the child
            const offset = y - box.top - box.height / 2; // Calculate offset from center
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }; // Update closest if closer element found
            } else {
                return closest; // Keep current closest
            }
        },
        { offset: Number.NEGATIVE_INFINITY } // Initial value for closest
    ).element; // Return the closest element
};
