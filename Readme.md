Project for developing and exporting templates into proprietary software.

### Templates:

- [x] Label for folder, 5cm
- [x] Label for folder, 8cm
- [ ] Label, DinA6
- [ ] Label, DinA7
- [ ] Label, DinA7/2
- [ ] Label, DinA7 1cm
- [x] Letter DinA5 with personal touch
- [ ] Letter DinA4
- [ ] Envelope DinC6
- [ ] Envelope DinC6 with personal touch

### Todo:

- [ ] Standalone server for generating codes (qr, aztec, ...)
- [ ] Standalone server for serving icons as SVG files (mdi, own icons, ...)
- [ ] Add example image for every template?

### Requirements

- font [Qanelas Soft](https://www.myfonts.com/fonts/radomir-tinkov/qanelas-soft), replaceable by customizing the templates

### Commands

```bash
yarn serve        # starts local file server, useful for working an templates
yarn build        # build css-file, demo-html and pack them into individual ZIP-files (used by proprietary software)
```