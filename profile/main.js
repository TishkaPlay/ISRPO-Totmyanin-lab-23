document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const displayBlock = document.getElementById('profileDisplay');
    const clearBtn = document.getElementById('clearBtn');
    const errorMsg = document.getElementById('errorMsg');

    //поля вывода
    const displayName = document.getElementById('displayName');
    const displayAge = document.getElementById('displayAge');
    const displayCity = document.getElementById('displayCity');
    const displayHobbies = document.getElementById('displayHobbies');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMsg.classList.add('hidden');

        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const city = document.getElementById('city').value.trim();
        const hobbies = document.getElementById('hobbies').value.trim();

        //проверка пустых полей
        if (!name || !age || !city || !hobbies) {
            errorMsg.textContent = '⚠ Пожалуйста, заполните все поля!';
            errorMsg.classList.remove('hidden');
            return;
        }

        //отображение данных
        displayName.textContent = name;
        displayAge.textContent = age;
        displayCity.textContent = city;
        displayHobbies.textContent = hobbies;

        displayBlock.classList.remove('hidden');
        form.reset();
    });

    clearBtn.addEventListener('click', () => {
        displayBlock.classList.add('hidden');
        errorMsg.classList.add('hidden');
        form.reset();
    });
});