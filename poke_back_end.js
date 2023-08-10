$(document).ready(function() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    $('button').click(function() {
        const name = $('#input').val();
        const url = baseUrl + name;

        $.get(url, function(data, status) {
            const pokeName = 'Name: ' + capitalizeFirstLetter(data.name);
            const pokeImage = data.sprites.front_default;
            const pokeId = 'Pokedex Number: ' + data.id;

            $('.poke-details-container').remove();
            const container = $('<div>').addClass('poke-details-container');

            const nameHeader = $('<h1>').text(pokeName);
            const imageHeader = $('<img>').attr('src', pokeImage).css({
                width: '300px',
                height: '300px',
            });
            const idHeader = $('<h1>').text(pokeId);

            container.append(nameHeader, imageHeader, idHeader);
            $('body').append(container);
        }).fail(function(error) {
            console.error("No Digimon Please, Enter valid Pokedex Entry", error);
        });
    });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
