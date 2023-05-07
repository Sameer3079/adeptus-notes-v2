"use client";

import Note from "models/note.model";
import { useEffect, useState } from "react";

export default function Notes() {
  const [showNotes, setShowNotes] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNotes(true);
    }, 4000)
  }, [])

  if (!showNotes) {
    return null;
  }

  return (
    <>
      <div className="animate-fade-up opacity-0 z-10 h-full w-full p-4">
        <h1 className="bg-gradient-to-br from-black to-red-900 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]">
          My Notes
        </h1>

        <div className="w-full flex justify-center">
          <input className="rounded-full border-gray-300 w-1/2 mt-4 mb-4" type="text" name="" id="" placeholder="Search here (Ctrl K)" />
        </div>

        <div className="flex flex-wrap" style={{ animationDelay: '0.15s' }}>
          {notes.map((note) => (
            <Note
              key={note.id} note={note} />
          ))}
        </div>
      </div>
    </>
  )
}

function Note({ note }: { note: Note }) {
  return (
    <div className="p-2 w-3/12">
      <div
        className="p-3 h-max rounded-md bg-neutral-100 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
      >
        <div className="text-2xl text-black truncate">
          {note.title}
        </div>
        <div className="text-gray-600 truncate">
          {note.content}
        </div>
      </div>
    </div>
  )
}

const notes: Array<Note> = [{
  "id": 1,
  "title": "posuere nonummy integer non velit",
  "content": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
  "createdAt": "7/10/2022",
  "updatedAt": "9/17/2022"
}, {
  "id": 2,
  "title": "congue elementum",
  "content": "pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
  "createdAt": "4/27/2023",
  "updatedAt": "10/3/2022"
}, {
  "id": 3,
  "title": "vestibulum ac",
  "content": "ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci",
  "createdAt": "8/15/2022",
  "updatedAt": "1/23/2023"
}, {
  "id": 4,
  "title": "risus semper porta",
  "content": "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
  "createdAt": "5/22/2022",
  "updatedAt": "1/22/2023"
}, {
  "id": 5,
  "title": "quis odio consequat varius integer",
  "content": "donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum",
  "createdAt": "5/10/2022",
  "updatedAt": "3/15/2023"
}, {
  "id": 6,
  "title": "tincidunt ante vel ipsum praesent",
  "content": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin",
  "createdAt": "2/14/2023",
  "updatedAt": "11/5/2022"
}, {
  "id": 7,
  "title": "in magna",
  "content": "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
  "createdAt": "7/15/2022",
  "updatedAt": "4/22/2023"
}, {
  "id": 8,
  "title": "sit amet justo morbi ut",
  "content": "mauris morbi non lectus aliquam sit amet diam in magna bibendum",
  "createdAt": "4/3/2023",
  "updatedAt": "4/25/2023"
}, {
  "id": 9,
  "title": "donec odio",
  "content": "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
  "createdAt": "12/23/2022",
  "updatedAt": "9/14/2022"
}, {
  "id": 10,
  "title": "suscipit a feugiat et eros",
  "content": "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
  "createdAt": "2/9/2023",
  "updatedAt": "10/29/2022"
}, {
  "id": 11,
  "title": "eget nunc donec quis",
  "content": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
  "createdAt": "1/11/2023",
  "updatedAt": "1/22/2023"
}, {
  "id": 12,
  "title": "at lorem integer tincidunt",
  "content": "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
  "createdAt": "4/28/2023",
  "updatedAt": "12/3/2022"
}, {
  "id": 13,
  "title": "bibendum imperdiet nullam orci",
  "content": "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
  "createdAt": "4/19/2023",
  "updatedAt": "5/23/2022"
}, {
  "id": 14,
  "title": "velit donec diam",
  "content": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
  "createdAt": "9/8/2022",
  "updatedAt": "4/14/2023"
}, {
  "id": 15,
  "title": "ultrices posuere cubilia",
  "content": "ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
  "createdAt": "6/2/2022",
  "updatedAt": "5/15/2022"
}, {
  "id": 16,
  "title": "luctus et ultrices",
  "content": "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
  "createdAt": "10/22/2022",
  "updatedAt": "9/25/2022"
}, {
  "id": 17,
  "title": "libero rutrum ac lobortis vel",
  "content": "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
  "createdAt": "1/9/2023",
  "updatedAt": "11/6/2022"
}, {
  "id": 18,
  "title": "in congue",
  "content": "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse",
  "createdAt": "2/2/2023",
  "updatedAt": "12/10/2022"
}, {
  "id": 19,
  "title": "molestie sed",
  "content": "pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis",
  "createdAt": "1/18/2023",
  "updatedAt": "1/21/2023"
}, {
  "id": 20,
  "title": "fermentum justo nec",
  "content": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
  "createdAt": "12/25/2022",
  "updatedAt": "8/8/2022"
}, {
  "id": 21,
  "title": "in imperdiet et",
  "content": "porta volutpat erat quisque erat eros viverra eget congue eget semper",
  "createdAt": "4/28/2023",
  "updatedAt": "4/9/2023"
}, {
  "id": 22,
  "title": "justo sit",
  "content": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
  "createdAt": "11/19/2022",
  "updatedAt": "3/12/2023"
}, {
  "id": 23,
  "title": "donec semper sapien a libero",
  "content": "et tempus semper est quam pharetra magna ac consequat metus sapien",
  "createdAt": "8/5/2022",
  "updatedAt": "6/29/2022"
}, {
  "id": 24,
  "title": "vel accumsan",
  "content": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",
  "createdAt": "8/5/2022",
  "updatedAt": "12/4/2022"
}, {
  "id": 25,
  "title": "cum sociis natoque penatibus",
  "content": "enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
  "createdAt": "2/26/2023",
  "updatedAt": "5/11/2022"
}, {
  "id": 26,
  "title": "dui vel sem sed",
  "content": "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id",
  "createdAt": "5/6/2023",
  "updatedAt": "10/29/2022"
}, {
  "id": 27,
  "title": "velit donec",
  "content": "massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst",
  "createdAt": "8/28/2022",
  "updatedAt": "4/29/2023"
}, {
  "id": 28,
  "title": "interdum venenatis turpis",
  "content": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
  "createdAt": "12/7/2022",
  "updatedAt": "2/10/2023"
}, {
  "id": 29,
  "title": "nunc viverra dapibus nulla",
  "content": "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
  "createdAt": "5/17/2022",
  "updatedAt": "8/25/2022"
}, {
  "id": 30,
  "title": "eu est",
  "content": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
  "createdAt": "11/18/2022",
  "updatedAt": "11/23/2022"
}, {
  "id": 31,
  "title": "congue risus semper",
  "content": "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
  "createdAt": "8/2/2022",
  "updatedAt": "7/7/2022"
}, {
  "id": 32,
  "title": "tincidunt ante vel ipsum",
  "content": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
  "createdAt": "2/15/2023",
  "updatedAt": "4/7/2023"
}, {
  "id": 33,
  "title": "sit amet cursus id turpis",
  "content": "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
  "createdAt": "5/23/2022",
  "updatedAt": "2/14/2023"
}, {
  "id": 34,
  "title": "amet eleifend pede",
  "content": "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo",
  "createdAt": "12/16/2022",
  "updatedAt": "3/27/2023"
}, {
  "id": 35,
  "title": "eleifend luctus ultricies",
  "content": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
  "createdAt": "4/22/2023",
  "updatedAt": "8/19/2022"
}, {
  "id": 36,
  "title": "nisl nunc rhoncus dui vel",
  "content": "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie",
  "createdAt": "5/17/2022",
  "updatedAt": "7/18/2022"
}, {
  "id": 37,
  "title": "amet cursus id",
  "content": "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
  "createdAt": "8/22/2022",
  "updatedAt": "2/22/2023"
}, {
  "id": 38,
  "title": "turpis sed ante vivamus",
  "content": "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
  "createdAt": "4/3/2023",
  "updatedAt": "5/27/2022"
}, {
  "id": 39,
  "title": "volutpat sapien arcu sed",
  "content": "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
  "createdAt": "4/25/2023",
  "updatedAt": "1/24/2023"
}, {
  "id": 40,
  "title": "amet eros suspendisse accumsan",
  "content": "justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
  "createdAt": "3/12/2023",
  "updatedAt": "11/7/2022"
}, {
  "id": 41,
  "title": "semper interdum mauris ullamcorper",
  "content": "amet justo morbi ut odio cras mi pede malesuada in",
  "createdAt": "11/26/2022",
  "updatedAt": "5/28/2022"
}, {
  "id": 42,
  "title": "dis parturient",
  "content": "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
  "createdAt": "3/5/2023",
  "updatedAt": "6/1/2022"
}, {
  "id": 43,
  "title": "nec molestie sed",
  "content": "nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
  "createdAt": "5/15/2022",
  "updatedAt": "8/11/2022"
}, {
  "id": 44,
  "title": "nulla pede ullamcorper",
  "content": "a libero nam dui proin leo odio porttitor id consequat",
  "createdAt": "10/26/2022",
  "updatedAt": "1/9/2023"
}, {
  "id": 45,
  "title": "hac habitasse platea dictumst morbi",
  "content": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
  "createdAt": "7/16/2022",
  "updatedAt": "2/5/2023"
}, {
  "id": 46,
  "title": "massa quis augue luctus",
  "content": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
  "createdAt": "2/20/2023",
  "updatedAt": "7/30/2022"
}, {
  "id": 47,
  "title": "vitae consectetuer eget",
  "content": "consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
  "createdAt": "2/18/2023",
  "updatedAt": "12/29/2022"
}, {
  "id": 48,
  "title": "rutrum nulla tellus in",
  "content": "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
  "createdAt": "9/10/2022",
  "updatedAt": "12/26/2022"
}, {
  "id": 49,
  "title": "volutpat sapien arcu",
  "content": "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
  "createdAt": "5/20/2022",
  "updatedAt": "9/3/2022"
}, {
  "id": 50,
  "title": "a nibh in quis justo",
  "content": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
  "createdAt": "11/19/2022",
  "updatedAt": "9/25/2022"
}, {
  "id": 51,
  "title": "nascetur ridiculus mus etiam vel",
  "content": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",
  "createdAt": "10/2/2022",
  "updatedAt": "12/28/2022"
}, {
  "id": 52,
  "title": "velit nec",
  "content": "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis",
  "createdAt": "5/12/2022",
  "updatedAt": "11/21/2022"
}, {
  "id": 53,
  "title": "urna pretium nisl ut",
  "content": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  "createdAt": "12/2/2022",
  "updatedAt": "2/21/2023"
}, {
  "id": 54,
  "title": "nisi volutpat eleifend donec",
  "content": "eget congue eget semper rutrum nulla nunc purus phasellus in felis",
  "createdAt": "4/4/2023",
  "updatedAt": "3/8/2023"
}, {
  "id": 55,
  "title": "eget tempus vel pede morbi",
  "content": "nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
  "createdAt": "5/23/2022",
  "updatedAt": "4/14/2023"
}, {
  "id": 56,
  "title": "ligula in lacus",
  "content": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
  "createdAt": "2/22/2023",
  "updatedAt": "4/27/2023"
}, {
  "id": 57,
  "title": "at vulputate",
  "content": "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
  "createdAt": "5/29/2022",
  "updatedAt": "2/6/2023"
}, {
  "id": 58,
  "title": "natoque penatibus et",
  "content": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
  "createdAt": "10/2/2022",
  "updatedAt": "8/23/2022"
}, {
  "id": 59,
  "title": "habitasse platea dictumst morbi vestibulum",
  "content": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in",
  "createdAt": "12/31/2022",
  "updatedAt": "4/1/2023"
}, {
  "id": 60,
  "title": "tincidunt ante",
  "content": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
  "createdAt": "2/22/2023",
  "updatedAt": "1/16/2023"
}, {
  "id": 61,
  "title": "non lectus aliquam sit",
  "content": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
  "createdAt": "3/27/2023",
  "updatedAt": "3/26/2023"
}, {
  "id": 62,
  "title": "sed tincidunt eu",
  "content": "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
  "createdAt": "6/14/2022",
  "updatedAt": "2/17/2023"
}, {
  "id": 63,
  "title": "pretium quis lectus suspendisse",
  "content": "phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu",
  "createdAt": "3/10/2023",
  "updatedAt": "5/19/2022"
}, {
  "id": 64,
  "title": "ipsum primis in faucibus orci",
  "content": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",
  "createdAt": "6/10/2022",
  "updatedAt": "3/17/2023"
}, {
  "id": 65,
  "title": "mi sit",
  "content": "risus dapibus augue vel accumsan tellus nisi eu orci mauris",
  "createdAt": "12/2/2022",
  "updatedAt": "1/15/2023"
}, {
  "id": 66,
  "title": "rhoncus dui vel sem",
  "content": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
  "createdAt": "2/12/2023",
  "updatedAt": "10/25/2022"
}, {
  "id": 67,
  "title": "magna bibendum imperdiet",
  "content": "odio cras mi pede malesuada in imperdiet et commodo vulputate",
  "createdAt": "12/6/2022",
  "updatedAt": "12/13/2022"
}, {
  "id": 68,
  "title": "orci eget orci",
  "content": "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
  "createdAt": "8/18/2022",
  "updatedAt": "10/30/2022"
}, {
  "id": 69,
  "title": "ultrices mattis odio donec vitae",
  "content": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
  "createdAt": "3/13/2023",
  "updatedAt": "11/27/2022"
}, {
  "id": 70,
  "title": "ut massa volutpat convallis",
  "content": "neque aenean auctor gravida sem praesent id massa id nisl",
  "createdAt": "3/24/2023",
  "updatedAt": "1/7/2023"
}, {
  "id": 71,
  "title": "eget vulputate ut ultrices vel",
  "content": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
  "createdAt": "10/12/2022",
  "updatedAt": "3/16/2023"
}, {
  "id": 72,
  "title": "ultricies eu nibh",
  "content": "nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor",
  "createdAt": "4/19/2023",
  "updatedAt": "10/21/2022"
}, {
  "id": 73,
  "title": "tempus sit amet",
  "content": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam",
  "createdAt": "7/29/2022",
  "updatedAt": "10/3/2022"
}, {
  "id": 74,
  "title": "erat fermentum justo",
  "content": "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque",
  "createdAt": "6/28/2022",
  "updatedAt": "5/9/2022"
}, {
  "id": 75,
  "title": "ac nulla sed vel enim",
  "content": "consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
  "createdAt": "4/1/2023",
  "updatedAt": "10/30/2022"
}, {
  "id": 76,
  "title": "nonummy integer non velit donec",
  "content": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
  "createdAt": "2/28/2023",
  "updatedAt": "2/6/2023"
}, {
  "id": 77,
  "title": "diam in magna",
  "content": "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  "createdAt": "7/23/2022",
  "updatedAt": "5/12/2022"
}, {
  "id": 78,
  "title": "enim sit amet nunc",
  "content": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla",
  "createdAt": "1/29/2023",
  "updatedAt": "8/5/2022"
}, {
  "id": 79,
  "title": "non mattis",
  "content": "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient",
  "createdAt": "2/10/2023",
  "updatedAt": "3/27/2023"
}, {
  "id": 80,
  "title": "etiam pretium iaculis",
  "content": "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id",
  "createdAt": "4/1/2023",
  "updatedAt": "5/26/2022"
}, {
  "id": 81,
  "title": "massa id",
  "content": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
  "createdAt": "12/11/2022",
  "updatedAt": "3/28/2023"
}, {
  "id": 82,
  "title": "justo maecenas rhoncus",
  "content": "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
  "createdAt": "5/13/2022",
  "updatedAt": "5/14/2022"
}, {
  "id": 83,
  "title": "gravida sem praesent",
  "content": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",
  "createdAt": "12/6/2022",
  "updatedAt": "3/26/2023"
}, {
  "id": 84,
  "title": "ut mauris eget massa",
  "content": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh",
  "createdAt": "2/9/2023",
  "updatedAt": "3/13/2023"
}, {
  "id": 85,
  "title": "non velit donec",
  "content": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
  "createdAt": "10/26/2022",
  "updatedAt": "12/4/2022"
}, {
  "id": 86,
  "title": "amet lobortis sapien",
  "content": "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna",
  "createdAt": "6/4/2022",
  "updatedAt": "6/28/2022"
}, {
  "id": 87,
  "title": "leo odio porttitor id",
  "content": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur",
  "createdAt": "6/26/2022",
  "updatedAt": "12/6/2022"
}, {
  "id": 88,
  "title": "eget rutrum at",
  "content": "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
  "createdAt": "4/21/2023",
  "updatedAt": "7/8/2022"
}, {
  "id": 89,
  "title": "erat quisque",
  "content": "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
  "createdAt": "5/22/2022",
  "updatedAt": "6/19/2022"
}, {
  "id": 90,
  "title": "erat fermentum justo nec",
  "content": "ut mauris eget massa tempor convallis nulla neque libero convallis eget",
  "createdAt": "5/26/2022",
  "updatedAt": "2/6/2023"
}, {
  "id": 91,
  "title": "luctus et",
  "content": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
  "createdAt": "10/3/2022",
  "updatedAt": "10/13/2022"
}, {
  "id": 92,
  "title": "eros viverra eget",
  "content": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut",
  "createdAt": "1/3/2023",
  "updatedAt": "10/9/2022"
}, {
  "id": 93,
  "title": "tempor turpis nec",
  "content": "porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla",
  "createdAt": "2/21/2023",
  "updatedAt": "10/18/2022"
}, {
  "id": 94,
  "title": "lacus at velit vivamus",
  "content": "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis",
  "createdAt": "1/31/2023",
  "updatedAt": "3/7/2023"
}, {
  "id": 95,
  "title": "vestibulum ante ipsum primis",
  "content": "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
  "createdAt": "9/18/2022",
  "updatedAt": "12/5/2022"
}, {
  "id": 96,
  "title": "blandit lacinia",
  "content": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
  "createdAt": "5/11/2022",
  "updatedAt": "12/9/2022"
}, {
  "id": 97,
  "title": "mus vivamus vestibulum",
  "content": "ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
  "createdAt": "1/29/2023",
  "updatedAt": "10/29/2022"
}, {
  "id": 98,
  "title": "pretium iaculis",
  "content": "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
  "createdAt": "3/14/2023",
  "updatedAt": "8/21/2022"
}, {
  "id": 99,
  "title": "turpis enim blandit",
  "content": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
  "createdAt": "6/18/2022",
  "updatedAt": "11/10/2022"
}, {
  "id": 100,
  "title": "nunc nisl duis",
  "content": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
  "createdAt": "6/29/2022",
  "updatedAt": "11/4/2022"
}]
