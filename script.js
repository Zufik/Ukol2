let user = {
    name: prompt ("Zadej své jméno bez diakritiky"),
    surname: prompt ("Zadej své příjmení, také bez diakritiky"),
}

user.name = user.name.trim();
user.name = user.name.slice (0,3);
user.name = user.name.toLowerCase();

user.surname = user.surname.trim();
user.surname = user.surname.slice (0,5);
user.surname = user.surname.toLowerCase();

finalUser = user.surname + user.name 

document.body.innerHTML = ` Vaše přihlašovací jméno do systému je ${finalUser}@fit.cvut.cz.
`