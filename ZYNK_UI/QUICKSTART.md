# 🚀 InternFlow - Quick Start Guide

## Start the Application

### 1. Start Backend (Terminal 1)
```bash
cd /home/vanni.chaudhary@ad.franconnect.com/Desktop/hack6/ZYNC_BKD/zynk_backend
./mvnw spring-boot:run
```
✅ Backend will run at: http://localhost:1234

### 2. Start Frontend (Terminal 2)
```bash
cd /home/vanni.chaudhary@ad.franconnect.com/Desktop/hack6/ZYNK_UI
python3 -m http.server 5500
```
✅ Frontend will run at: http://localhost:5500

## Access the Application

🏠 **Landing Page**: http://localhost:5500/

👔 **HR Portal**: http://localhost:5500/hr-login.html
- Email: `hr@internflow.com`
- Password: `hr123456`

👨‍💼 **Intern Portal**: http://localhost:5500/intern-login.html
- First create an intern via HR portal, then login

## Features

### HR Can:
- Onboard new interns
- Approve/reject leaves
- Manage invoices
- Create trainings & assign to interns
- Post announcements
- Handle separation requests
- Generate AI monthly summaries

### Interns Can:
- View/update their profile
- Generate monthly invoices
- Request leaves
- View training materials
- Ask Policy Buddy AI questions
- Track stipend and leave balance

## Theme Customization

All theming is centralized in `config.js`. Change colors, buttons, cards, etc. in one place!

## 🎨 Color Theme
- **HR Portal**: Royal Blue (#6366F1)
- **Intern Portal**: Pale Orange (#F97316)
- **Background**: Light White/Gray theme

---

**Complete UI with 23 pages, 40+ API endpoints integrated, and modern professional design!**

