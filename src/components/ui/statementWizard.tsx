'use client';

import { useState, useMemo } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Plus, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import subjects from '../data/subjects.json';
import { categorizeBySentiment, verbData } from '../utils/verbUtils';
import { toast } from 'react-hot-toast';
import type React from 'react';

interface StatementWizardProps {
  onComplete: (statement: {
    subject: string;
    verb: string;
    object: string;
    isPublic: boolean;
  }) => void;
  username: string;
}

type Step = 'closed' | 'who' | 'action' | 'what' | 'privacy';

const StatementWizard: React.FC<StatementWizardProps> = ({
  onComplete,
  username,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('closed');
  const [selection, setSelection] = useState({
    subject: '',
    verb: '',
    object: '',
    isPublic: false,
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter subject tiles based on the provided username
  const subjectTiles = useMemo(() => {
    const userSubject = subjects.find(
      (subject) => subject.subject === username
    );
    if (!userSubject) return [];

    return [
      { label: userSubject.subject, value: userSubject.subject },
      ...userSubject.descriptors.map((descriptor) => ({
        label: `${userSubject.subject}'s ${descriptor}`,
        value: `${userSubject.subject}'s ${descriptor}`,
      })),
    ];
  }, [username]);

  // Group verbs by sentiment and category
  const categorizedVerbs = useMemo(() => categorizeBySentiment(verbData), []);

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = verbData.flatMap((verb) => verb.categories);
    return Array.from(new Set(allCategories)).sort();
  }, []);

  const getContrastColor = (hexColor: string) => {
    const r = Number.parseInt(hexColor.slice(1, 3), 16);
    const g = Number.parseInt(hexColor.slice(3, 5), 16);
    const b = Number.parseInt(hexColor.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  const getSubjectQuestion = (username: string): string => {
    return `This statement applies to ${username} or someone/something else?`;
  };

  const getActionQuestion = (subject: string): string => {
    return `What's happening with ${subject}? How do they feel or what do they experience?`;
  };

  const getContextQuestion = (subject: string, verb: string): string => {
    const verbObj = verbData.find((v) => v.name === verb);
    if (!verbObj) return 'Can you elaborate on that?';

    // Customize question based on verb category
    if (
      verbObj.categories.some(
        (cat) => cat.includes('Support') || cat.includes('Help')
      )
    ) {
      return `How does ${subject} ${verb.toLowerCase()}? What's the impact?`;
    }
    if (
      verbObj.categories.some(
        (cat) => cat.includes('Growth') || cat.includes('Development')
      )
    ) {
      return `In what way does ${subject} ${verb.toLowerCase()}? What's the goal?`;
    }
    if (
      verbObj.categories.some(
        (cat) => cat.includes('Conflict') || cat.includes('Opposition')
      )
    ) {
      return `Why does ${subject} ${verb.toLowerCase()}? What's the reason?`;
    }

    return `How does ${subject} ${verb.toLowerCase()}? What's the context?`;
  };

  const filteredVerbs = useMemo(() => {
    if (!selectedCategory) return verbData;
    return verbData.filter((verb) =>
      verb.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  const sortedVerbs = useMemo(() => {
    return [...filteredVerbs].sort((a, b) => {
      if (a.color !== b.color) {
        return a.color.localeCompare(b.color);
      }
      return a.name.localeCompare(b.name);
    });
  }, [filteredVerbs]);

  const handleOpen = () => {
    setIsOpen(true);
    setStep('who');
    setSelection({
      subject: '',
      verb: '',
      object: '',
      isPublic: false,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep('closed');
    setSelectedCategory(null);
  };

  const handleBack = () => {
    switch (step) {
      case 'action':
        setStep('who');
        setSelectedCategory(null);
        break;
      case 'what':
        setStep('action');
        break;
      case 'privacy':
        setStep('what');
        break;
      default:
        handleClose();
    }
  };

  const handleComplete = () => {
    onComplete(selection);
    handleClose();
    toast.success('Statement created successfully!');
  };

  const renderStep = () => {
    switch (step) {
      case 'who':
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold text-center mb-6'>
              {getSubjectQuestion(username)}
            </h2>
            <div className='grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto p-2'>
              {subjectTiles.map((tile, index) => (
                <Button
                  key={tile.value}
                  variant={
                    selection.subject === tile.value ? 'default' : 'outline'
                  }
                  className={`h-auto py-4 px-6 text-left flex flex-col items-start space-y-1 transition-all ${
                    index === 0 ? 'bg-blue-50 hover:bg-blue-100' : ''
                  }`}
                  onClick={() => {
                    setSelection((prev) => ({ ...prev, subject: tile.value }));
                    setStep('action');
                  }}
                >
                  <span className='font-medium'>{tile.label}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case 'action':
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold text-center mb-6'>
              {getActionQuestion(selection.subject)}
            </h2>
            <div className='flex flex-wrap gap-2 mb-4'>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? 'default' : 'outline'
                  }
                  size='sm'
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                  className='text-xs'
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-[50vh] overflow-y-auto p-2'>
              {sortedVerbs.map((verb) => (
                <Button
                  key={verb.name}
                  variant={selection.verb === verb.name ? 'default' : 'outline'}
                  className='h-auto py-2 px-3 text-left flex items-center justify-center transition-all text-sm'
                  style={{
                    backgroundColor:
                      selection.verb === verb.name ? verb.color : 'transparent',
                    color:
                      selection.verb === verb.name
                        ? getContrastColor(verb.color)
                        : 'inherit',
                    borderColor: verb.color,
                  }}
                  onClick={() => {
                    setSelection((prev) => ({ ...prev, verb: verb.name }));
                    setStep('what');
                  }}
                >
                  <span className='font-medium'>{verb.name}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case 'what':
        return (
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold text-center'>
              {getContextQuestion(selection.subject, selection.verb)}
            </h2>
            <Input
              autoFocus
              placeholder='Type your answer...'
              value={selection.object}
              onChange={(e) =>
                setSelection((prev) => ({ ...prev, object: e.target.value }))
              }
              className='text-lg p-4'
            />
            <Button
              className='w-full'
              onClick={() => selection.object.trim() && setStep('privacy')}
              disabled={!selection.object.trim()}
            >
              Continue
            </Button>
          </div>
        );

      case 'privacy':
        return (
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold text-center'>
              Who can see this statement?
            </h2>
            <div className='space-y-4'>
              <Button
                variant='outline'
                className={`w-full h-auto p-4 flex items-center justify-between ${
                  !selection.isPublic ? 'border-2 border-primary' : ''
                }`}
                onClick={() =>
                  setSelection((prev) => ({ ...prev, isPublic: false }))
                }
              >
                <div className='flex items-center space-x-3'>
                  <EyeOff className='w-5 h-5' />
                  <div className='text-left'>
                    <div className='font-medium'>Private</div>
                    <div className='text-sm text-muted-foreground'>
                      Only you can see this
                    </div>
                  </div>
                </div>
              </Button>
              <Button
                variant='outline'
                className={`w-full h-auto p-4 flex items-center justify-between ${
                  selection.isPublic ? 'border-2 border-primary' : ''
                }`}
                onClick={() =>
                  setSelection((prev) => ({ ...prev, isPublic: true }))
                }
              >
                <div className='flex items-center space-x-3'>
                  <Eye className='w-5 h-5' />
                  <div className='text-left'>
                    <div className='font-medium'>Public</div>
                    <div className='text-sm text-muted-foreground'>
                      Everyone can see this
                    </div>
                  </div>
                </div>
              </Button>
            </div>
            <Button className='w-full' onClick={handleComplete}>
              Create Statement
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className='w-full'>
        <Plus className='w-5 h-5 mr-2' />
        Add New Statement
      </Button>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className='sm:max-w-[600px] pt-6'>
          <div className='relative'>
            {step !== 'who' && (
              <Button
                variant='ghost'
                size='icon'
                className='absolute left-4 top-4 z-10'
                onClick={(e) => {
                  e.stopPropagation();
                  handleBack();
                }}
              >
                <ArrowLeft className='w-4 h-4' />
              </Button>
            )}
            <AnimatePresence
              mode='wait'
              initial={false}
              onExitComplete={() => null}
            >
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StatementWizard;
