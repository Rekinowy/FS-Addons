const schema = {
  name: 'addon',
  Title: 'Addon',
  type:'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: 
        { source: 'title' } },
    {
      name: 'icao',
      title: 'ICAO',
      type: 'string',
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'version',
      title: 'Version',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
        calendarTodayLabel: 'Today'
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['aircrafts', 'airports', 'misc', 'utilities'],
      },
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: { hotspot: true },
    },
  ]
}

export default schema;