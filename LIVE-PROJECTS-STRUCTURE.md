# Live Business Projects Structure

## 📁 New Page Structure

### **Navigation Flow:**
```
Homepage
  └─ Projects Section
      └─ Local Business Websites Card
          └─ /projects/local-business-websites
              ├─ Live Business Card → /projects/local-business-websites/live
              │   ├─ STC Cloud Solutions Card → /projects/local-business-websites/live/stc
              │   └─ GMK Technologies Card → /projects/local-business-websites/live/gmk
              └─ Demo Card → /projects/local-business-websites/demo
```

## 🆕 New Pages Created

### 1. **LiveBusinessList.tsx** (`/projects/local-business-websites/live`)
- Shows 2 flipping cards: STC Cloud Solutions & GMK Technologies
- Each card has:
  - Front: Project image, logo, tags, description
  - Back: Buttons for "View Case Study" and "Visit Website"
- Live badge showing number of projects
- SEO optimized

### 2. **STCProject.tsx** (`/projects/local-business-websites/live/stc`)
- Renamed from LiveBusiness.tsx
- Full case study for STC Cloud Solutions
- Screenshots, deliverables, work done
- Live website link

### 3. **GMKProject.tsx** (`/projects/local-business-websites/live/gmk`)
- New page for GMK Technologies
- Same structure as STC project
- Ready for GMK-specific content and images

## 🎨 Features

### **LiveBusinessList Page:**
- ✅ Two flipping cards (STC & GMK)
- ✅ Live badge with pulse animation
- ✅ Project tags (BPO, React, EmailJS, etc.)
- ✅ Gradient backgrounds per project
- ✅ Two CTAs: "View Case Study" & "Visit Website"
- ✅ Info section about live projects
- ✅ Responsive design
- ✅ SEO optimized

### **Individual Project Pages:**
- ✅ Live badge
- ✅ Hero section with title and description
- ✅ "Visit Live Website" button
- ✅ Screenshot gallery
- ✅ Project overview card
- ✅ "What I Did" section with icons
- ✅ "What I Delivered" checklist
- ✅ Metallic card design
- ✅ Back navigation

## 🔄 Updated Routes

```typescript
// App.tsx routes
<Route path="/projects/local-business-websites" element={<LocalBusinessWebsites />} />
<Route path="/projects/local-business-websites/live" element={<LiveBusinessList />} />
<Route path="/projects/local-business-websites/live/stc" element={<STCProject />} />
<Route path="/projects/local-business-websites/live/gmk" element={<GMKProject />} />
<Route path="/projects/local-business-websites/demo" element={<Demo />} />
```

## 📝 To-Do: Add GMK Content

### **Images Needed:**
Replace placeholder images in `GMKProject.tsx`:
- [ ] Main screenshot: `/assets/gmk.png`
- [ ] Logo: `/assets/gmk-logo.png`
- [ ] Section 1: `/assets/gmk1.png`
- [ ] Section 2: `/assets/gmk2.png`

### **Content to Update:**
In `LiveBusinessList.tsx`, update GMK project object:
- [ ] `image`: Path to GMK main screenshot
- [ ] `logo`: Path to GMK logo
- [ ] `website`: Actual GMK website URL
- [ ] `description`: Update with GMK-specific description

In `GMKProject.tsx`:
- [ ] Update all image paths
- [ ] Update website URL in GlassButton
- [ ] Customize description if needed

## 🎯 User Journey

1. **User clicks "Local Business Websites" on homepage**
   - Lands on page with 2 cards: Live Business & Demo

2. **User clicks "Live Business" card**
   - Lands on LiveBusinessList page
   - Sees 2 cards: STC Cloud Solutions & GMK Technologies

3. **User clicks STC or GMK card (back side)**
   - Option 1: "View Case Study" → Goes to detailed project page
   - Option 2: "Visit Website" → Opens live website in new tab

4. **On project detail page**
   - Can view full case study
   - Can click "Visit Live Website" button
   - Can navigate back to list

## ✨ Design Features

### **Card Animations:**
- Flip animation on hover/click
- Scale feedback on button press
- Smooth transitions

### **Visual Elements:**
- Live badge with pulse animation
- Gradient backgrounds per project
- Metallic card design
- Tag pills for technologies
- Icon-based feature lists

### **Mobile Optimized:**
- Responsive grid layout
- Touch-friendly card flips
- Proper spacing and padding
- Readable text sizes

---

**Status:** ✅ Structure Complete
**Next Step:** Add GMK-specific images and content
**Last Updated:** May 14, 2026
