import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string; // Add the link prop
  passwordEnabled: boolean;
  password: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  image,
  link,
  passwordEnabled,
  password,
}) => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setEnteredPassword('');
    setPasswordError('');
  };

  const handleProjectClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!passwordEnabled) {
      return;
    }

    event.preventDefault();
    setIsPasswordModalOpen(true);
    setEnteredPassword('');
    setPasswordError('');
  };

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredPassword === password) {
      closePasswordModal();
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    setPasswordError('Incorrect password. Please try again.');
  };

  return (
    <>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleProjectClick}
        className="block rounded-3xl overflow-hidden bg-card text-card-foreground border border-border cursor-pointer group md:flex md:min-h-[360px]"
        whileHover={{ y: -5 }}
      >
        <div className="overflow-hidden md:w-[58%] md:order-2">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-56 sm:h-64 md:h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="p-6 sm:p-8 md:p-10 md:w-[42%] flex flex-col justify-between md:order-1">
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-md">{title}</h3>
              <p className="mt-2 inline-flex rounded-full border border-border px-3 py-1 text-xs sm:text-sm font-medium text-foreground/90">
                {date}
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">{description}</p>
          </div>
          <span className="bg-foreground text-background px-4 sm:px-5 py-2.5 rounded-full flex items-center font-medium group-hover:bg-purple-500 group-hover:text-white transition-colors w-fit text-sm sm:text-base">
            EXPLORE
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
      </motion.a>

      {isPasswordModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closePasswordModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-purple-500/40 bg-black px-5 py-6 sm:px-6 shadow-[0_0_45px_rgba(168,85,247,0.25)]"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-white">Project Locked</h4>
            <p className="mt-2 text-sm text-zinc-300">Enter the password to open {title}.</p>

            <form onSubmit={handlePasswordSubmit} className="mt-5 space-y-4">
              <input
                type="password"
                value={enteredPassword}
                onChange={(event) => setEnteredPassword(event.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-purple-500/40 bg-zinc-950 px-3 py-2.5 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                autoFocus
              />

              {passwordError && (
                <p className="text-sm text-purple-300">{passwordError}</p>
              )}

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closePasswordModal}
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-400"
                >
                  Unlock
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
