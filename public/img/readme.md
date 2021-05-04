# Images

We're using cloudinary instead of self-hosted images, to allow for transforms etc.

The account's "app" is defined in `next.config.js`.

## Getting Started

1. Upload your image to cloudinary.
2. Copy the names of the images (they get suffixed).
3. Use the copied name in the `src="..."` attribute of NextJS's `<Image />` component.
