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
  `;
};
