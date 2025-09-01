'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Copy, Download, Cookie } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { SparklesText } from '@/components/ui/sparkles-text';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
}

const fortunes = {
  Vision: [
    "Your sketchbook hides an idea the world is waiting for.",
    "Inspiration strikes when you stop chasing it.",
    "The best ideas come disguised as accidents.",
    "Every blank page is a chance to rewrite yourself.",
    "Creativity rewards those who stay curious.",
    "Your vision will shine brighter than your doubts.",
    "A bold color choice will define your future.",
    "Dreams become designs when you act on them.",
    "Your inner child holds the key to your next idea.",
    "A spark of imagination will light up your path.",
    "Originality grows from imperfections.",
    "The muse visits those who dare to start.",
    "A breakthrough is only one sketch away.",
    "The details you obsess over will inspire others.",
    "Your style is the story you tell without words.",
    "Creativity whispers softly—listen closely.",
    "A wild idea will soon feel practical.",
    "Your vision inspires someone you've never met.",
    "Today's doodle is tomorrow's icon.",
    "What feels impossible now will one day feel obvious.",
    "Imagination thrives when rules bend.",
    "The mistake you keep will be your masterpiece.",
    "Curiosity opens more doors than certainty.",
    "Your best idea will arrive at the messiest moment.",
    "A flash of creativity will arrive with laughter.",
    "Your art will outlive your worries.",
    "The idea you fear most is the one worth chasing.",
    "You will inspire by simply being yourself.",
    "Colors tell the truth words cannot.",
    "A creative risk will win admiration.",
    "The world sees beauty through your eyes.",
    "Your originality is your greatest currency.",
    "A new perspective will solve an old problem.",
    "Inspiration waits in the ordinary.",
    "A single line can change your whole design.",
    "Your vision is clearer than your doubt.",
    "Art blooms in places you least expect.",
    "The creative spark you lost will return.",
    "A forgotten idea will come back stronger.",
    "Your hand will draw what your heart already knows.",
    "Inspiration strikes when you step outside.",
    "A playful thought will lead to serious brilliance.",
    "Creativity is not found—it's remembered.",
    "Someone admires the way you think differently.",
    "Your vision will light someone else's path.",
    "A new tool will unleash your imagination.",
    "Your mistakes will inspire your style.",
    "A moment of silence will unlock an idea.",
    "The impossible will feel achievable tomorrow.",
    "You will surprise yourself with what you create."
  ],
  Work: [
    "A small win today fuels bigger victories tomorrow.",
    "Hard work will open doors luck cannot.",
    "The respect you seek will come through patience.",
    "A deadline you fear will sharpen your skills.",
    "Persistence beats talent when talent doesn't persist.",
    "A quiet effort will gain loud recognition.",
    "You will find success in unexpected places.",
    "Discipline is your hidden superpower.",
    "Today's extra effort becomes tomorrow's opportunity.",
    "The project you dread will be your proudest work.",
    "Teamwork will unlock something you couldn't alone.",
    "A setback is just a disguised lesson.",
    "Your career will leap when you least expect.",
    "The right mentor will appear at the right time.",
    "Focus is the bridge between goals and success.",
    "A thank-you will carry more weight than money.",
    "You'll turn pressure into progress.",
    "Your reliability will outshine others' speed.",
    "What feels boring today will build mastery.",
    "A risk at work will earn respect.",
    "Recognition will arrive quietly, not loudly.",
    "The challenge you face is the opportunity you need.",
    "A single habit will change your career path.",
    "You will impress someone who never praises.",
    "The work no one wants will showcase your talent.",
    "Your resilience is stronger than the obstacles.",
    "Small efforts compound into big results.",
    "Your name will be mentioned in the right room.",
    "A mentor will become a lifelong ally.",
    "Patience in work creates lasting rewards.",
    "Your leadership will be noticed in silence.",
    "Success grows in the soil of consistency.",
    "An email will change your week.",
    "The opportunity you missed will circle back.",
    "Your work ethic will inspire others.",
    "A fresh start will give you fresh energy.",
    "The task you hate most will teach you most.",
    "Your time management will finally pay off.",
    "A job done right beats a job done fast.",
    "The project you start reluctantly will end with pride.",
    "Confidence is built by small promises kept.",
    "Someone higher up is watching your growth.",
    "The promotion you want starts with today's effort.",
    "Balance at work creates clarity in life.",
    "You'll win trust by owning mistakes.",
    "The grind you despise builds character.",
    "Your diligence is your strongest asset.",
    "Tomorrow's win begins with tonight's preparation.",
    "Your work will travel further than you do.",
    "Success comes slower—but it lasts longer."
  ],
  Life: [
    "Laughter will find you when you least expect it.",
    "A stranger's kindness will brighten your week.",
    "The best memories aren't planned—they happen.",
    "Joy grows when it's shared.",
    "A silly mistake will make for a great story.",
    "A new friendship will surprise you.",
    "Your favorite meal will taste even better shared.",
    "Happiness comes when you stop counting.",
    "A forgotten hobby will bring fresh joy.",
    "Someone will remember your kindness for years.",
    "A song will carry you back to a perfect moment.",
    "Your laughter will echo longer than your worries.",
    "Play keeps your soul alive.",
    "A lost item will find its way back.",
    "Someone will compliment you when you need it.",
    "A child's smile will remind you of innocence.",
    "A deep breath will change your whole day.",
    "An old friend will reappear with good news.",
    "Small joys multiply faster than big ones.",
    "A shared joke will mend a strained bond.",
    "Adventure waits outside your routine.",
    "A pet will understand you better than words.",
    "The day will end better than it began.",
    "Spontaneity will lead to joy.",
    "A mistake will turn into a blessing.",
    "Someone will think of you fondly today.",
    "A new flavor will become your favorite.",
    "Laughter heals more than medicine.",
    "The best gift you'll get is time.",
    "An unexpected message will brighten your evening.",
    "A memory will bring comfort when needed.",
    "Joy hides in the smallest routines.",
    "A warm drink will fix a cold day.",
    "A smile will spread faster than you think.",
    "Your kindness will echo louder than your words.",
    "Happiness sneaks in when you pause.",
    "An old picture will make you smile.",
    "The best advice will come from laughter.",
    "Someone you help will surprise you in return.",
    "A walk will bring clarity.",
    "Life is shorter than you think—dance more.",
    "A funny story will outlive the worry behind it.",
    "Your heart will feel lighter by evening.",
    "Play is not wasted—it is wisdom in disguise.",
    "Someone's compliment will stay with you for weeks.",
    "Joy comes in unexpected packages.",
    "A new memory will be your favorite souvenir.",
    "An ordinary day will turn extraordinary.",
    "Happiness hides in small rituals.",
    "Your laughter will be contagious today."
  ],
  Mystic: [
    "What you seek is already seeking you.",
    "A closed door hides a better doorway ahead.",
    "The stars whisper louder when you are still.",
    "Destiny will come dressed as coincidence.",
    "Your path will bend, not break.",
    "The answer lies within silence.",
    "The winds of change bring unseen gifts.",
    "Patience will reveal the pattern of life.",
    "A hidden truth will come to light.",
    "The number three will guide your week.",
    "Tomorrow's mystery will feel familiar.",
    "The unknown is your greatest teacher.",
    "The universe conspires in your favor.",
    "A dream will hold more truth than fact.",
    "The moment you doubt, the sign will appear.",
    "A circle will complete itself.",
    "The shadows hide a message for you.",
    "Change is already unfolding around you.",
    "The past echoes softly but clearly.",
    "A stranger will carry wisdom to you.",
    "The right moment has already begun.",
    "Your destiny wears ordinary clothes.",
    "What you fear hides your greatest gift.",
    "Balance will restore your spirit.",
    "An ending will reveal a hidden beginning.",
    "The stars align when your heart listens.",
    "A number will repeat until you notice.",
    "The truth you seek is closer than you think.",
    "The river of time carries you to peace.",
    "A message will reach you in dreams.",
    "The mystery reveals itself only when asked kindly.",
    "The answer is in the question itself.",
    "An unseen guide walks with you.",
    "The storm will clear faster than you fear.",
    "A vision will come with silence.",
    "Tomorrow holds a secret gift.",
    "The universe has already said yes.",
    "A forgotten symbol will reappear.",
    "Light follows your patience.",
    "The unknown is safer than it feels.",
    "Your spirit already knows the way.",
    "Synchronicity is your compass.",
    "The truth comes in fragments.",
    "Your soul will recognize its own sign.",
    "The full moon will carry clarity.",
    "The veil is thinner than you believe.",
    "An ancient voice echoes through your steps.",
    "The mystery is also the answer.",
    "A cycle completes itself today.",
    "The future already remembers you."
  ]
};

export function CookieModal({ isOpen, onClose, selectedCategory }: CookieModalProps) {
  const [currentFortune, setCurrentFortune] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateNewFortune = useCallback(() => {
    if (selectedCategory) {
      setIsLoading(true);
      setTimeout(() => {
        const categoryFortunes = fortunes[selectedCategory as keyof typeof fortunes] || fortunes.Vision;
        const randomIndex = Math.floor(Math.random() * categoryFortunes.length);
        setCurrentFortune(categoryFortunes[randomIndex]);
        setIsLoading(false);
      }, 2000); // 2 second loading animation
    }
  }, [selectedCategory]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentFortune);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Failed to copy");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  const saveFortune = () => {
    try {
      const fortuneData = {
        fortune: currentFortune,
        category: selectedCategory,
        date: new Date().toISOString(),
      };
      
      const blob = new Blob([JSON.stringify(fortuneData, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fortune-${selectedCategory}-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setSaveStatus("Saved!");
      setTimeout(() => setSaveStatus(""), 2000);
    } catch {
      setSaveStatus("Failed to save");
      setTimeout(() => setSaveStatus(""), 2000);
    }
  };

  useEffect(() => {
    if (isOpen && selectedCategory) {
      generateNewFortune();
    }
  }, [isOpen, selectedCategory, generateNewFortune]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[854px] max-w-none bg-white rounded-2xl border-0 shadow-2xl">
        <div className="p-6 text-center">
          {/* Cookie Image */}
          <div className="mb-6 flex justify-center items-center">
            <Image
              src="/cookie-final.png"
              alt="Fortune Cookie"
              width={579}
              height={416}
              className="object-contain"
            />
          </div>
          
          {/* Loading Animation or Fortune Message */}
          <div className="mb-8">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <SparklesText 
                  text="Cracking a new cookie..." 
                  className="text-2xl text-gray-900 font-medium"
                  colors={{ first: "#431C00", second: "#9E7AFF" }}
                  sparklesCount={15}
                />
              </div>
            ) : (
              <p className="text-[24px] text-gray-900 font-medium leading-relaxed">
                &ldquo;{currentFortune}&rdquo;
              </p>
            )}
          </div>
          
          {/* Copy and Save Buttons */}
          <div className="flex gap-3 mb-4">
            <Button 
              variant="outline" 
              className="flex-1 bg-white border-gray-200 hover:bg-gray-50 text-gray-900 font-medium text-xl py-2 px-4 rounded-[999px]"
              onClick={copyToClipboard}
              disabled={isLoading}
            >
              <Copy className="h-4 w-4 mr-2" />
              {copyStatus || "Copy"}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 bg-white border-gray-200 hover:bg-gray-50 text-gray-900 font-medium text-xl py-2 px-4 rounded-[999px]"
              onClick={saveFortune}
              disabled={isLoading}
            >
              <Download className="h-4 w-4 mr-2" />
              {saveStatus || "Save"}
            </Button>
          </div>
          
          {/* New Fortune Button */}
          <Button 
            className="w-full text-white font-medium text-xl py-8 px-6 rounded-[999px] shadow-md"
            style={{ backgroundColor: '#431C00' }}
            onClick={generateNewFortune}
            disabled={isLoading}
          >
            <Cookie className="h-4 w-4 mr-2" />
            New Fortune
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
