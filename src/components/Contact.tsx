import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:mazenelkala47@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "mazenelkala47@gmail.com",
    link: "mailto:mazenelkala47@gmail.com"
  }, {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+20 1094484047",
    link: "tel:+201094484047"
  }, {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Benha, Egypt",
    link: ""
  }];
  const socialLinks = [{
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    url: "https://github.com/MazenHisham1",
    color: "hover:text-gray-400"
  }, {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mazenhisham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:text-blue-400"
  }, {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    url: "mailto:mazenelkala47@gmail.com",
    color: "hover:text-red-400"
  }];
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can work together to turn your data into actionable insights. 
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-lg text-foreground/80 mb-8">
                I'm always excited to discuss new projects, opportunities, or just chat about 
                data science and AI. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => <Card key={index} className="glass-card border-0 hover:neon-glow transition-all duration-300">
                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        {info.link ? <a href={info.link} className="text-primary hover:text-primary/80 transition-colors">
                            {info.value}
                          </a> : <p className="text-muted-foreground">{info.value}</p>}
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 glass-card rounded-lg hover:neon-glow transition-all duration-300 group ${social.color}`}>
                    {social.icon}
                  </a>)}
              </div>
            </div>

            {/* Availability */}
            <Card className="glass-card border-0">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Current Availability</h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-foreground">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently open to freelance projects, internships, and full-time opportunities 
                  in data science and AI fields.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-card border-0 hover:neon-glow transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="glass-card border-primary/30 focus:border-primary" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="glass-card border-primary/30 focus:border-primary" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required className="glass-card border-primary/30 focus:border-primary" placeholder="What's this about?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="glass-card border-primary/30 focus:border-primary resize-none" placeholder="Tell me about your project or what you'd like to discuss..." />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground py-3 rounded-xl neon-glow flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground mb-4">© 2025 Mazen Hisham. All rights reserved.</p>
          <p className="text-sm gradient-text-secondary font-medium">
        </p>
        </div>
      </div>
    </section>;
};