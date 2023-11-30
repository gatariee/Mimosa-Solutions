
//The function `placePlayerAtEnd` sets the player's position near the end of the canvas.
function placePlayerAtEnd() {
    // Ensure the player body is defined
    if (!player) {
        console.error('Player body is not defined');
        return;
    }

    // Set the player's position to near the end of the canvas
    Body.setPosition(player, {
        x: canvas.width - 50, // Adjust as needed based on the canvas size
        y: player.position.y // Maintain the current vertical position
    });
}

// Call this function to place the player at the end
placePlayerAtEnd();


// Update var key value on browser console
// var key = 'level-0';
// var key = 'level-1';
// var key = 'level-2';
// var key = 'level-3';
// var key = 'level-4';
// var key = 'level-5';
// var key = 'level-6';
// var key = 'level-7';
// var key = 'level-8';
// var key = 'delta';
// var key = 'zenith';
// var key = 'wall';
// var key = 'wait-what';
// var key = 'recursion';
// var key = 'castle';
// var key = 'eternity';
