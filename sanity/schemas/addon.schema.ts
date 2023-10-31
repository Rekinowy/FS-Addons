const schema = {
  name: 'addon',
  Title: 'Addons',
  type:'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icao',
      title: 'ICAO',
      type: 'string',
      hidden: ({parent}: any) => parent?.category !== 'airports'
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: 
        { source: (doc: any) => `${doc.developer} ${doc.title}` }
    },
    {
      name: 'version',
      title: 'Version',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
      name: 'country',
      title: 'Country',
      type: 'string',
      hidden: ({parent}: any) => parent?.category !== 'airports' && parent?.category !== 'misc'
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
      hidden: ({parent}: any) => parent?.category !== 'airports'
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