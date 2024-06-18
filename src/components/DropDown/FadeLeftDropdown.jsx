'use client';
import CP from '@/ui/CP';
import { useEffect, useRef, useState } from 'react';

const code = `import { useEffect, useRef, useState } from 'react';

export default function FadeLeftDropDown() {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ['React', 'Angular', 'Vue'];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false)
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close)
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
      <button onClick={() => setOpen((prev) => !prev)} className="rounded-sm bg-sky-600 px-6 py-2">Dropdown</button>
      <ul className={\`\${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1 rounded-sm\`}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={\`rounded-sm bg-sky-400 p-2 \${open ? 'opacity-100 duration-500' : 'opacity-0 duration-200'} hover:bg-sky-500\`}
            style={{ transform: \`translateX(\${open ? 0 : (idx + 1) * 20}px)\`}}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
`;

export default function FadeLeftDropdown(i) {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = ['React', 'Angular', 'Vue'];
    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);

        return () => {
            document.removeEventListener('mousedown', close);
        };
    }, []);
    return (
        <CP code={code} i={i}>
            <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
                <button
                    onClick={() => {
                        setOpen((prev) => !prev);
                    }}
                    className="rounded-sm bg-sky-600 px-6 py-2"
                >
                    Dropdown
                </button>
                <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1 rounded-sm`}>
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            className={`rounded-sm bg-sky-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-200'} hover:bg-sky-500`}
                            style={{
                                transform: `translateX(${open ? 0 : (idx + 1) * 20}px)`
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </CP>
    );
}
