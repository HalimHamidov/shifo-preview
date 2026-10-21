# Responsive hero artwork

The first hero artwork, its copy, buttons, typography and `main.css` are unchanged.
The following three slides use the user-supplied PNGs on landscape screens.
Originals were copied unchanged from `Downloads/ШИФФО` into `img/banner/`.

| Slide | Original file | Desktop asset | Portrait asset |
|---|---|---|---|
| 2 | Уютный трехместный номер с комфортом.png | comfortable-room.png | comfortable-room-mobile.png |
| 3 | Оздоровительное оборудование в спа-интерьере.png | wellness-equipment.png | wellness-equipment-mobile.png |
| 4 | Отдых у Кайраккумского моря.png | rest-by-the-sea.png | rest-by-the-sea-mobile.png |

All paths in the table are relative to `img/banner/`. Portrait derivatives are
941x1672 and were created with the built-in image generation tool from their
corresponding supplied originals, as authorized by the user. They are adapted
artwork, not additional documentary photographs. Desktop originals are 1672x941.
Only the portrait derivatives remove baked-in copy; mobile copy is rendered as
HTML and translated by the existing language switcher.

## Final generation prompts

Room:

> Edit the supplied room image into a photorealistic PORTRAIT 9:16 mobile website hero background, high resolution. Preserve the identity of this exact room: three single beds in their existing parallel arrangement, dark wood mirrored wardrobe on the left, beige walls, burgundy towels on the white beds, dark doors and dresser. Keep geometry, natural proportions, materials, believable daylight and realistic photographic detail. Reframe naturally for a vertical phone composition and extend ceiling and foreground bedding/floor where necessary. Do not stretch the original, do not add extra beds or furniture. REMOVE ALL overlaid Russian headline and subtitle completely, replacing their pixels with the matching real bedding/room. No text, no logo, no watermark, no UI. Frame the furniture in the middle upper portion; bottom quarter should be naturally darker bedding/floor with enough quiet space for HTML captions. This is an adaptive derivative of the user's artwork, not a different luxurious room.

Equipment:

> Create a photorealistic PORTRAIT 9:16 adaptive mobile hero from this exact supplied spa treatment-room artwork. Preserve the distinctive green and white treatment apparatus exactly: rectangular tilted white treatment panels with green metal edging and the tall green/white control cabinet on the right. Do not change or invent medical devices, button design or proportions. Keep bright tiled room, daylight window, plants, subtle framed spa posters and folded towels, realistic room perspective. Reframe for a tall phone composition; extend natural room ceiling, wall, foreground floor/towels as needed. Remove all large overlaid Russian headline/subtitle and the decorative line from the original left side, replacing with plausible matching room/window detail. No large text, no logo, no watermark, no UI. Entire important apparatus comfortably fits within portrait image without stretching or clipping the control cabinet. Bottom quarter should provide relatively calm floor/towels for a readable HTML caption gradient. Natural photography, avoid synthetic exaggerated shine.

Rest by the sea:

> Edit this supplied resort illustration into a natural photorealistic PORTRAIT 9:16 mobile website hero. Preserve the same scene and atmosphere: calm reservoir at sunset with distant mountains, man fishing from a wooden boardwalk beside a gazebo, white resort building with red roof and fountain on the right, foreground freshly grilled fish/vegetables and picnic food. Reframe naturally to a believable tall portrait composition; extend sky, reflected water and foreground wood as necessary. Keep one fisherman, plausible fishing rod, coherent architecture and realistic food textures. Preserve natural proportions, never stretch or squeeze. REMOVE the overlaid Russian title, subtitle and all lettering completely, fill with matching scenery. No text, logos, watermark, borders, UI or split panels. Keep sunset/gazebo and fisherman as clear focal points, with a naturally quieter darker foreground lower quarter for HTML captions. Avoid adding extra buildings, invented landmarks or distorted human anatomy.

## Verification

- Desktop 1440x900: original landscape images fit below the 75px header;
  the hero remains 900px high across slides.
- Mobile 390x844: portrait sources selected; the hero remains 844px high;
  captions and controls clear both the header and the bottom action bar.
- Manual next/previous and keyboard arrows preserve image aspect ratios.
- No horizontal overflow observed in either viewport.
- First hero markup and all subsequent sections compared against the previous
  preview commit; original background asset and base stylesheet unchanged.
