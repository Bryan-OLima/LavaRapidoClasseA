export function DateFormater(date: Date): string {
  const formater = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'medium',
  });

  return formater.format(date);
}
