from PIL import Image, ImageDraw, ImageFont
import os

# Create a 200x60 image with black background
img = Image.new('RGB', (200, 60), color='black')
draw = ImageDraw.Draw(img)

# Draw curved swoosh - thick teal section
draw.arc([10, 10, 50, 50], 0, 180, fill='#00D4AA', width=6)

# Draw curved swoosh - thin grey section  
draw.arc([40, 15, 80, 55], 0, 180, fill='#666666', width=3)

# Draw text
try:
    # Try to use a system font
    font_large = ImageFont.truetype("arial.ttf", 24)
    font_small = ImageFont.truetype("arial.ttf", 12)
except:
    # Fallback to default font
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Draw AI text in teal
draw.text((60, 5), "AI", fill='#00D4AA', font=font_large)

# Draw BSH text in white
draw.text((85, 5), "BSH", fill='white', font=font_large)

# Draw TECHNOLOGIES text in teal
draw.text((60, 35), "TECHNOLOGIES", fill='#00D4AA', font=font_small)

# Save the image
img.save('public/logo.png')
print("Logo created successfully!")
