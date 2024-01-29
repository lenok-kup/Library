const containers = document.querySelectorAll('.favorites__container');
const radios = document.querySelectorAll('.favorites__radio-btn');

radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedBlockId = event.target.value;
        containers.forEach(block => {
            if (block.id === selectedBlockId) {
                if (block.classList.contains('hidden')) {
                    block.classList.remove('fade-out');
                    window.setTimeout(function () {
                        block.classList.remove('hidden');
                        block.classList.add('fade-in');
                    }, 2000);
                };
            }
            else if (!block.classList.contains('hidden')) {
                block.classList.remove('fade-in');
                block.classList.add('fade-out');
                window.setTimeout(function () {

                    block.classList.add('hidden');
                }, 2000);
            };
        });
    });
});






























