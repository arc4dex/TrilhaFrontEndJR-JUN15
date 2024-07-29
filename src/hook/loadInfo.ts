import info from '../data/info.json';

export const getFormattedInfo = () => {
  return `
  Nome: ${info.name}
  Data de nascimento: ${info.birthdate}
  Local de nascimento: ${info.birthplace}
  Estado civil: ${info.marital_status}
  Cônjuge: ${info.spouse.name} - ${info.spouse.profession} no ${info.spouse.workplace}
  História do cônjuge: ${info.spouse.story}
  Anos em BH: ${info.years_in_bh}
  Motivo da mudança: ${info.reason_for_moving}
  Residências anteriores: ${info.previous_residences.map(res => `${res.city}, ${res.state} (${res.years} anos) - ${res.reason}`).join('; ')}
  Irmãos: ${info.siblings.map(sib => `${sib.name} (${sib.age} anos, ${sib.location}, ${sib.occupation}, ${sib.hobbies})`).join('; ')}
  Pais: ${info.parents.map(parent => `${parent.name} (${parent.description})`).join('; ')}
  Pets: ${info.pets.map(pet => `${pet.name} (${pet.type}) - ${pet.story}`).join('; ')}
  Hobbies: ${info.hobbies.map(hobby => hobby.name).join(', ')}
  Interesses: ${info.interests.map(interest => `${interest.name} - ${interest.details || ''}`).join('; ')}
  Dieta: ${info.diet}
  Família: ${info.family.siblings.details}
  Contato: Email - ${info.contact.email}, LinkedIn - ${info.contact.linkedin}, GitHub - ${info.contact.github}, Portfólio - ${info.contact.portfolio}
  Educação: ${info.education.map(edu => `${edu.degree} em ${edu.institution}, ${edu.location} (${edu.start_date} - ${edu.end_date})`).join('; ')}
  Experiência Profissional: ${info.professional_experience.map(exp => `${exp.role} na ${exp.company}, ${exp.location} (${exp.start_date} - ${exp.end_date}) - ${exp.responsibilities.join(', ')}`).join('; ')}
  Habilidades: ${info.skills.join(', ')}
  Objetivo: ${info.objective}
  Cor Favorita: ${info.favorites.color}
  Comida Favorita: ${info.favorites.food}
  Filme Favorito: ${info.favorites.movie}
  Anime Favorito: ${info.favorites.anime}
  Banda Favorita: ${info.favorites.band}
  Música Favorita: ${info.favorites.music}
  Deck Favorito de Magic: ${info.favorites.magic_deck}
  Boardgame Favorito: ${info.favorites.boardgame}
  Escritor Favorito: ${info.favorites.author}
  Livro Favorito: ${info.favorites.book}
  Bandas que gosto: ${info.favorites.bands.join(', ')}
  Odeio: Filmes com o George Clooney, Animes com meninas semi nuas e poder da amizade, Pepino, Melão
  Estados visitados: ${info.travel.visited_states.join(', ')}, País visitado: ${info.travel.visited_country}
  Gosto de road trips: ${info.travel.road_trip}
  Tenho Miastenia gravis mas os sintomas estão controlados.
  País que gostaria de conhecer: ${info.dream.country}
  Link dos meus artigos da Cúpula do Trovão: ${info.interests.find(interest => interest.name === 'Escrever artigos sobre animes')?.articles_link}
  Sou um cozinheiro de mão cheia, alguns dos meus pratos se destacam no Instagram: ${info.cooking.highlight}
  `;
};
