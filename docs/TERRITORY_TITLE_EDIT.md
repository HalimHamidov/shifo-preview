# Territory title edit

Tool: built-in imagegen, edit mode. Source: `img/maps/shifo-territory-guide.png` (retained). Result: `img/maps/shifo-territory-no-title.png`, 1516 × 1038.

The duplicate raster title was removed. All 14 numbered labels, their text and visible map layout were visually compared with the source. The newly exposed area behind the former title is generated continuation, not surveyed geographic data.

## Prompt

Edit target: supplied satellite resort map. Remove ONLY the large long ornamental title banner at top spanning x254..1087 y30..133, including its Russian text 'Места силы санатория «ШИФО»', frame and small ornament. Inpaint this narrow area with plausible continuation of the immediately surrounding satellite trees and ground. Do NOT add text or new landmarks. STRICT invariants: retain original canvas dimensions 1516x1038, entire rest of map unchanged, all 14 numbered callout labels with exact existing Cyrillic text, locations, leader lines, icon shapes, roads, buildings, shoreline, yellow boundary, colors, and left upper lotus SHIFO logo unchanged. Do not redraw or restyle the whole map. No cropping. This is a precise removal of top title banner only. Save edited output as a local image file and return its local path.
