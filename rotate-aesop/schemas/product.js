import { MdLocalDrink } from 'react-icons/md'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: MdLocalDrink,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'images',
      name: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'suitedTo',
      title: 'Suited to',
      type: 'string',
    },
    {
      name: 'skinFeel',
      title: 'Skin feel',
      type: 'string',
    },
    {
      name: 'keyIngredients',
      title: 'Key ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
}
