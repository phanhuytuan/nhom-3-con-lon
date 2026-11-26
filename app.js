const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const icon = (name, className = 'icon') => `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

const lessons = {
  basics: {
    title: 'Nét vẽ đầu tiên',
    description: 'Làm quen với nét thẳng, nét cong, áp lực bút và cách quan sát hình dáng trước khi vẽ.',
    duration: '45 phút',
    stepCount: 4,
    level: 'Người mới',
    status: 'BÀI HỌC CƠ BẢN',
    file: 'net-ve-dau-tien.png',
    guide: 'Bắt đầu bằng những nét nhẹ, ngắn và tự nhiên.',
    skill: 'Nét vẽ',
    outcomes: ['Quan sát và phác thảo nhẹ nhàng', 'Vẽ nét thẳng, nét cong có kiểm soát', 'Thay đổi kích thước cọ và độ mờ'],
    steps: [
      { title: 'Quan sát và nét thẳng', task: 'Chọn bút chì, kích thước 6 px. Vẽ 10 đường thẳng với độ dài khác nhau, giữ khoảng cách đều.', tip: 'Vẽ từ vai, giữ nét nhẹ và không căng thẳng cổ tay.' },
      { title: 'Nét cong và chuyển động', task: 'Vẽ 5 đường cong như chữ S, sau đó 5 vòng cung mở. Không cần hoàn hảo.', tip: 'Nếu đường bị run, hãy vẽ chậm hơn và dùng nét dài hơn.' },
      { title: 'Áp lực và kích thước', task: 'Dùng cọ vẽ để tạo 5 nét mảnh và 5 nét dày bằng cách thay đổi thanh kích thước.', tip: 'Quan sát sự khác biệt giữa bút chì và cọ trước khi tô màu.' },
      { title: 'Phác thảo hình đầu tiên', task: 'Phác thảo một quả táo hoặc chiếc bình bằng 4–6 nét nhẹ. Chỉ tập trung vào hình dáng tổng thể.', tip: 'Nhìn vào khoảng trống xung quanh chủ thể, không chỉ nhìn vào chủ thể.' }
    ]
  },
  color: {
    title: 'Vũ trụ màu sắc',
    description: 'Khám phá vòng tròn màu, sắc độ và cách kết hợp màu để tạo cảm xúc cho tác phẩm.',
    duration: '60 phút',
    stepCount: 5,
    level: 'Cơ bản',
    status: 'HÀNH TINH MÀU SẮC',
    file: 'vu-tru-mau-sac.png',
    guide: 'Chọn một màu chính, sau đó thêm màu phụ và điểm nhấn.',
    skill: 'Màu sắc',
    outcomes: ['Chọn màu chính, màu phụ và điểm nhấn', 'Hiểu sắc độ và độ tương phản', 'Tạo một bảng màu phù hợp cho tranh'],
    steps: [
      { title: 'Nhận diện nhóm màu', task: 'Chọn 3 màu từ bảng màu và sắp xếp chúng theo cảm giác ấm hoặc lạnh.', tip: 'Không cần nhớ tên kỹ thuật; hãy quan sát cảm xúc từng màu mang lại.' },
      { title: 'Màu chính và màu phụ', task: 'Tô một vùng lớn bằng màu chính và một vùng nhỏ hơn bằng màu phụ.', tip: 'Thử tỷ lệ 60% màu chính, 30% màu phụ.' },
      { title: 'Sắc độ và độ tương phản', task: 'Tạo 5 ô cùng một màu nhưng chuyển dần từ rất nhạt sang rất đậm.', tip: 'Giữ khoảng trắng hoặc màu nền sáng để tạo điểm nhấn rõ ràng.' },
      { title: 'Điểm nhấn cuối cùng', task: 'Thêm một màu tương phản mạnh vào một vị trí quan trọng, không lạm dụng khắp tranh.', tip: 'Điểm nhấn nên nhỏ, có chủ ý và thu hút ánh nhìn đầu tiên.' },
      { title: 'Vẽ hành tinh màu sắc', task: 'Tạo một hành tinh tròn, dùng 3 màu yêu thích và thêm vành hoặc một ngôi sao.', tip: 'Bảng màu “Sao đêm” có thể là điểm khởi đầu nếu bạn chưa biết chọn màu.' }
    ]
  },
  composition: {
    title: 'Bố cục & điểm nhấn',
    description: 'Học cách đặt vật thể, tạo khoảng trống và dẫn mắt người xem qua không gian tranh.',
    duration: '55 phút',
    stepCount: 5,
    level: 'Cơ bản',
    status: 'BÀI HỌC CƠ BẢN',
    file: 'bo-cuc-diem-nhan.png',
    guide: 'Đặt chủ thể có chủ ý và tạo điểm nhấn rõ ràng.',
    skill: 'Bố cục',
    outcomes: ['Dùng quy tắc một phần ba', 'Cân bằng chủ thể và khoảng trống', 'Tạo điểm nhấn bằng màu sắc hoặc vị trí'],
    steps: [
      { title: 'Quan sát toàn bộ khung tranh', task: 'Vẽ hai đường ngang và hai đường dọc chia khung tranh thành 9 ô.', tip: 'Bật lưới bố cục để hỗ trợ quan sát trên màn hình.' },
      { title: 'Đặt chủ thể', task: 'Phác thảo chủ thể tại một giao điểm của lưới, tránh đặt chính giữa nếu muốn tranh sinh động.', tip: 'Khoảng trống phía đối diện giúp mắt người xem dễ di chuyển.' },
      { title: 'Xây dựng các khối lớn', task: 'Thêm hai hoặc ba vật thể phụ bằng những hình khối đơn giản.', tip: 'Tránh chia khung tranh thành quá nhiều phần nhỏ.' },
      { title: 'Kiểm tra sự cân bằng', task: 'Ẩn lớp màu và nhìn bản phác thảo. Điều chỉnh kích thước, vị trí để tổng thể cân đối.', tip: 'Cân bằng không có nghĩa là đối xứng; nó là cảm giác ổn định.' },
      { title: 'Tạo điểm nhấn và hoàn thiện', task: 'Thêm màu sắc, sau đó chọn một chi tiết làm điểm nhấn và giảm độ chi tiết ở các vùng khác.', tip: 'Nếu mọi chi tiết đều nổi bật thì không có chi tiết nào thật sự nổi bật.' }
    ]
  },
  perspective: {
    title: 'Chiều sâu & phối cảnh',
    description: 'Tìm hiểu điểm biến mất, tỷ lệ và cách tạo cảm giác chiều sâu trong tranh.',
    duration: '70 phút',
    stepCount: 5,
    level: 'Trung cấp',
    status: 'HÀNH TINH PHỐI CẢNH',
    file: 'chieu-sau-phoi-canh.png',
    guide: 'Dùng đường dẫn và điểm biến mất để xây dựng chiều sâu.',
    skill: 'Phối cảnh',
    outcomes: ['Xác định đường chân trời và điểm biến mất', 'Thay đổi kích thước theo khoảng cách', 'Tạo chiều sâu bằng màu và độ chi tiết'],
    steps: [
      { title: 'Đường chân trời', task: 'Vẽ một đường ngang làm chân trời ở một phần ba khung tranh.', tip: 'Vị trí chân trời quyết định bạn nhìn thấy nhiều trời hay nhiều mặt đất.' },
      { title: 'Điểm biến mất', task: 'Chọn một điểm trên chân trời và vẽ 4–6 đường dẫn từ cạnh dưới hội tụ về đó.', tip: 'Các đường dẫn song song trong thực tế có thể hội tụ khi nhìn xa.' },
      { title: 'Kích thước theo khoảng cách', task: 'Vẽ ba hình chữ nhật giống nhau nhưng kích thước giảm dần khi xa điểm biến mất.', tip: 'Vật càng xa thường nhìn càng nhỏ và có ít chi tiết hơn.' },
      { title: 'Che phủ và lớp màu', task: 'Thêm một vật thể che một phần vật thể khác để tạo cảm giác lớp trước, lớp sau.', tip: 'Màu xa thường nhạt và ít tương phản hơn màu gần.' },
      { title: 'Phác thảo phối cảnh hoàn chỉnh', task: 'Kết hợp đường chân trời, điểm biến mất, tỷ lệ và màu sắc trong một phong cảnh nhỏ.', tip: 'Dừng lại để nhìn toàn bộ tranh từ xa trước khi thêm chi tiết.' }
    ]
  }
};

let currentLesson = 'basics';
let currentView = 'dashboard';
let toastTimer = 0;
let galleryFilter = 'all';
let currentGuideStep = 0;

function showToast(message, type = '') {
  const container = $('#toastContainer');
  container.innerHTML = '';
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = icon(type === 'success' ? 'check' : 'sparkles');
  const text = document.createElement('span');
  text.textContent = message;
  toast.appendChild(text);
  container.appendChild(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 220);
  }, 3200);
}

const APP_STATE_KEY = 'artcanvas-state-v1';

function loadAppState() {
  let saved = {};
  let storedMotion = true;
  try {
    saved = JSON.parse(localStorage.getItem(APP_STATE_KEY) || '{}') || {};
    storedMotion = localStorage.getItem('artcanvas-motion') !== 'false';
  } catch (_) {}
  const progress = {};
  const guideStep = {};
  Object.keys(lessons).forEach(key => {
    progress[key] = Math.max(0, Math.min(lessons[key].stepCount, Number(saved.progress?.[key]) || 0));
    guideStep[key] = Math.max(0, Math.min(lessons[key].stepCount - 1, Number(saved.guideStep?.[key]) || 0));
  });
  return {
    name: typeof saved.name === 'string' ? saved.name.slice(0, 30) : '',
    progress,
    guideStep,
    xp: Math.max(0, Number(saved.xp) || 0),
    activity: saved.activity && typeof saved.activity === 'object' ? saved.activity : {},
    artworks: Array.isArray(saved.artworks) ? saved.artworks.filter(art => art && typeof art.data === 'string' && art.data.startsWith('data:image/')).slice(0, 12) : [],
    favorites: Array.isArray(saved.favorites) ? saved.favorites.filter(id => typeof id === 'string') : [],
    settings: {
      motion: saved.settings?.motion ?? storedMotion,
      nova: saved.settings?.nova !== false,
      reminder: saved.settings?.reminder !== false
    }
  };
}

let appState = loadAppState();

function saveAppState(showError = false) {
  try {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(appState));
    return true;
  } catch (_) {
    if (showError) showToast('Không thể lưu do dung lượng trình duyệt đã đầy. Hãy xuất ảnh để giữ tác phẩm.');
    return false;
  }
}

function dateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function recordActivity(xp = 0, seconds = 0) {
  if (!xp && !seconds) return;
  const key = dateKey();
  const current = appState.activity[key] || { xp: 0, seconds: 0, actions: 0 };
  appState.activity[key] = {
    xp: current.xp + xp,
    seconds: current.seconds + seconds,
    actions: current.actions + 1
  };
  appState.xp += xp;
  saveAppState(true);
}

function getStudiedDates() {
  return Object.keys(appState.activity).filter(key => {
    const day = appState.activity[key];
    return day && (day.seconds > 0 || day.xp > 0 || day.actions > 0);
  }).sort();
}

function getStreak() {
  const dates = new Set(getStudiedDates());
  const cursor = new Date();
  if (!dates.has(dateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (dates.has(dateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function getBestStreak() {
  const dates = getStudiedDates();
  let best = 0;
  let current = 0;
  let previous = null;
  dates.forEach(key => {
    const date = new Date(`${key}T12:00:00`);
    const difference = previous ? Math.round((date - previous) / 86400000) : 1;
    current = difference === 1 ? current + 1 : 1;
    best = Math.max(best, current);
    previous = date;
  });
  return best;
}

function getCompletedSteps() {
  return Object.values(appState.progress).reduce((sum, value) => sum + value, 0);
}

function getTotalSteps() {
  return Object.values(lessons).reduce((sum, lesson) => sum + lesson.stepCount, 0);
}

function getOverallPercent() {
  return Math.round(getCompletedSteps() / getTotalSteps() * 100);
}

function getCompletedLessons() {
  return Object.keys(lessons).filter(key => appState.progress[key] >= lessons[key].stepCount).length;
}

function getNextLessonKey() {
  return Object.keys(lessons).find(key => appState.progress[key] < lessons[key].stepCount) || 'basics';
}

function getLevel() {
  return Math.floor(appState.xp / 300) + 1;
}

function getLevelTitle() {
  const level = getLevel();
  if (level === 1) return 'Người bạn mới';
  if (level < 4) return 'Nhà khám phá';
  if (level < 7) return 'Kiến tạo vũ trụ';
  return 'Nghệ sĩ thiên hà';
}

function formatStudyTime(seconds) {
  if (seconds >= 3600) return `${(seconds / 3600).toFixed(1).replace('.', ',')} giờ`;
  return `${Math.max(1, Math.round(seconds / 60))} phút`;
}

function getInitials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 'AR';
  return Array.from(words.slice(0, 2).map(word => Array.from(word)[0]).join('')).join('').toUpperCase();
}

function renderProfile() {
  const name = appState.name.trim() || 'Người bạn mới';
  const initials = getInitials(name);
  $('#profileName').textContent = name;
  $('#welcomeName').textContent = name;
  $('#profileLevel').textContent = `Nhà khám phá cấp ${getLevel()}`;
  $('#profileAvatar').innerHTML = `${initials}<span class="profile-status"></span>`;
  $('#topbarAvatar').textContent = initials;
  $('#initialNovaGreeting').textContent = `Xin chào ${name}! Mình là Nova, người bạn đồng hành trên hành trình nghệ thuật.`;
}

function renderDashboard() {
  const completed = getCompletedLessons();
  const overall = getOverallPercent();
  const nextKey = getNextLessonKey();
  const next = lessons[nextKey];
  const nextPercent = Math.round(appState.progress[nextKey] / next.stepCount * 100);
  $('#todayLabel').textContent = new Intl.DateTimeFormat('vi-VN', { weekday: 'long', day: '2-digit', month: 'long' }).format(new Date()).toUpperCase();
  $('#lessonNavCount').textContent = `${completed}/4`;
  $('#completedLessonsMetric').innerHTML = `${completed} <span>/ 4 bài</span>`;
  $('#lessonMetricNote').textContent = completed === 4 ? 'Hành trình hoàn tất' : completed ? `${getCompletedSteps()} bước đã hoàn thành` : 'Sẵn sàng bắt đầu';
  const streak = getStreak();
  $('#streakMetric').innerHTML = `${streak} <span>ngày</span>`;
  $('#streakMetricNote').textContent = streak ? 'Tiếp tục phát huy!' : 'Học một chút mỗi ngày';
  $('#weeklyStreak').textContent = `${streak} ngày`;
  $('#artworkMetric').innerHTML = `${appState.artworks.length} <span>tác phẩm</span>`;
  $('#currentPlanetName').textContent = completed === 4 ? 'Hành trình hoàn tất' : next.title;
  $('#overallProgressText').textContent = `${overall}%`;
  $('#overallProgressBar').style.width = `${overall}%`;
  $('#continueLessonTag').textContent = completed === 4 ? 'HÀNH TRÌNH HOÀN TẤT' : nextPercent ? 'TIẾP TỤC HÀNH TRÌNH' : nextKey === 'basics' ? 'BÀI ĐẦU TIÊN · DÀNH CHO NGƯỜI MỚI' : 'BÀI TIẾP THEO · TIẾP TỤC HÀNH TRÌNH';
  $('#continueLessonTitle').textContent = next.title;
  $('#continueLessonDescription').textContent = next.description;
  $('#continueLessonDuration').textContent = next.duration;
  $('#continueLessonSteps').textContent = `${next.stepCount} bước`;
  $('#continueLessonPercent').textContent = `${nextPercent}%`;
  $('#continueLessonBar').style.width = `${nextPercent}%`;

  Object.keys(lessons).forEach(key => {
    const percent = Math.round(appState.progress[key] / lessons[key].stepCount * 100);
    const bar = $(`[data-planet-progress="${key}"]`);
    const status = $(`[data-planet-state="${key}"]`);
    if (bar) bar.style.width = `${percent}%`;
    if (!status) return;
    const done = percent === 100;
    const active = percent > 0 && !done;
    const next = key === nextKey && !done;
    status.classList.toggle('state-current', active || done || next);
    status.innerHTML = done ? `${icon('check')}ĐÃ HOÀN THÀNH` : active ? '<span></span>ĐANG HỌC' : next ? '<span></span>BẮT ĐẦU TẠI ĐÂY' : `${icon('arrow')}BÀI TIẾP THEO`;
  });

  const week = $('#weekDays');
  week.innerHTML = '';
  const studied = new Set(getStudiedDates());
  for (let offset = 6; offset >= 0; offset--) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const key = dateKey(date);
    const day = document.createElement('span');
    day.className = `${studied.has(key) ? 'done' : ''} ${key === dateKey() ? 'today' : ''}`;
    const label = document.createElement('small');
    label.textContent = new Intl.DateTimeFormat('vi-VN', { weekday: 'short' }).format(date).replace(',', '');
    const marker = document.createElement('i');
    marker.innerHTML = studied.has(key) ? icon('check') : String(date.getDate());
    day.append(label, marker);
    week.appendChild(day);
  }
  $('.daily-challenge').hidden = !appState.settings.reminder;
}

function renderLearning() {
  const completed = getCompletedLessons();
  const nextKey = getNextLessonKey();
  $('#learningPercent').textContent = `${Math.round(completed / 4 * 100)}%`;
  $('#learningRing').style.setProperty('--progress', `${Math.round(completed / 4 * 100)}%`);
  $('#learningCount').textContent = `${completed} / 4 bài học`;
  $$('.learning-module').forEach(module => {
    const key = module.dataset.lesson;
    const lesson = lessons[key];
    const percent = Math.round(appState.progress[key] / lesson.stepCount * 100);
    const status = percent === 100 ? 'done' : percent > 0 ? 'current' : 'new';
    module.dataset.status = status;
    const label = $(`[data-module-status="${key}"]`);
    const bar = $(`[data-module-progress="${key}"]`);
    const value = $(`[data-module-percent="${key}"]`);
    const buttonText = $(`[data-module-button="${key}"]`);
    if (bar) bar.style.width = `${percent}%`;
    if (value) value.textContent = `${percent}%`;
    if (buttonText) buttonText.textContent = percent === 100 ? 'Học lại bài' : percent > 0 ? 'Tiếp tục học' : 'Bắt đầu hành tinh';
    if (label) {
      label.classList.toggle('current', status === 'current');
      label.innerHTML = status === 'done' ? `${icon('check')}ĐÃ HOÀN THÀNH` : status === 'current' ? '<span></span>ĐANG HỌC' : key === nextKey ? '<span></span>BẮT ĐẦU TẠI ĐÂY' : `${icon('arrow')}BÀI TIẾP THEO`;
    }
  });
  const activeFilter = $('.filter-chip[data-filter].active')?.dataset.filter || 'all';
  $$('.learning-module').forEach(module => {
    module.style.display = activeFilter === 'all' || module.dataset.status === activeFilter ? '' : 'none';
  });
}

function renderGuide() {
  const lesson = lessons[currentLesson];
  const completed = appState.progress[currentLesson];
  const percent = Math.round(completed / lesson.stepCount * 100);
  currentGuideStep = Math.max(0, Math.min(lesson.stepCount - 1, currentGuideStep));
  const step = lesson.steps[currentGuideStep];
  $('#guideLessonTitle').textContent = lesson.title;
  $('#guideLessonIntro').textContent = lesson.guide;
  $('#guideProgressText').textContent = `Bước ${currentGuideStep + 1} / ${lesson.stepCount}`;
  $('#guidePercent').textContent = `${percent}%`;
  $('#guideProgressBar').style.width = `${percent}%`;
  $('#guideTaskText').textContent = step.task;
  $('#guideTip').textContent = step.tip;
  const list = $('#guideSteps');
  list.innerHTML = '';
  lesson.steps.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `guide-step ${index === currentGuideStep ? 'active' : ''} ${index < completed ? 'done' : ''}`;
    button.dataset.step = String(index);
    button.setAttribute('aria-current', index === currentGuideStep ? 'step' : 'false');
    const badge = document.createElement('span');
    badge.className = 'guide-step-badge';
    badge.innerHTML = index < completed ? icon('check') : String(index + 1);
    const copy = document.createElement('span');
    copy.className = 'guide-step-copy';
    const title = document.createElement('strong');
    title.textContent = item.title;
    const number = document.createElement('small');
    number.textContent = `Bước ${index + 1}`;
    copy.append(title, number);
    button.append(badge, copy);
    list.appendChild(button);
  });
  const completeButton = $('#completeStepButton');
  completeButton.disabled = false;
  if (completed === lesson.stepCount) {
    completeButton.innerHTML = `Xem lại bài học${icon('arrow')}`;
  } else if (currentGuideStep < completed) {
    completeButton.disabled = true;
    completeButton.innerHTML = `Bước ${currentGuideStep + 1} đã hoàn thành${icon('check')}`;
  } else if (currentGuideStep > completed) {
    completeButton.disabled = true;
    completeButton.innerHTML = `Hoàn thành bước ${completed + 1} trước`;
  } else {
    completeButton.innerHTML = `Hoàn thành bước ${currentGuideStep + 1}${icon('check')}`;
  }
}

function renderProgress() {
  const totalSeconds = Object.values(appState.activity).reduce((sum, day) => sum + (Number(day.seconds) || 0), 0);
  const completed = getCompletedLessons();
  const level = getLevel();
  const levelProgress = appState.xp % 300;
  $('#levelBadgeText').textContent = `Cấp ${level} · ${getLevelTitle()}`;
  $('#studyTimeMetric').innerHTML = `${totalSeconds ? formatStudyTime(totalSeconds) : '0'} <span>${totalSeconds >= 3600 ? '' : 'phút'}</span>`;
  $('#studyTimeNote').textContent = totalSeconds ? 'Thời gian thực hành trên thiết bị' : 'Bắt đầu từ hôm nay';
  $('#bestStreakMetric').innerHTML = `${getBestStreak()} <span>ngày</span>`;
  $('#bestStreakNote').textContent = getBestStreak() ? 'Kỷ lục cá nhân' : 'Học hôm nay để tạo kỷ lục';
  $('#lessonsMetric').innerHTML = `${completed} <span>/ 4</span>`;
  $('#lessonsMetricNote').textContent = `${getOverallPercent()}% hành trình`;
  $('#xpMetric').innerHTML = `${appState.xp.toLocaleString('vi-VN')} <span>XP</span>`;
  $('#xpNote').textContent = `${300 - levelProgress} XP đến cấp ${level + 1}`;

  const chart = $('#activityChart');
  chart.innerHTML = '';
  const days = [];
  for (let offset = 6; offset >= 0; offset--) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const seconds = Number(appState.activity[dateKey(date)]?.seconds) || 0;
    days.push({ date, seconds });
  }
  const maxSeconds = Math.max(60, ...days.map(day => day.seconds));
  days.forEach(day => {
    const column = document.createElement('div');
    if (day.seconds > 0) column.className = 'today';
    const bar = document.createElement('span');
    bar.style.height = `${Math.max(2, day.seconds / maxSeconds * 100)}%`;
    bar.title = `${Math.round(day.seconds / 60)} phút`;
    const label = document.createElement('small');
    label.textContent = new Intl.DateTimeFormat('vi-VN', { weekday: 'short' }).format(day.date).replace(',', '');
    column.append(bar, label);
    chart.appendChild(column);
  });

  const skills = [
    { label: 'Nét vẽ', key: 'basics' },
    { label: 'Màu sắc', key: 'color' },
    { label: 'Bố cục', key: 'composition' },
    { label: 'Phối cảnh', key: 'perspective' }
  ];
  $('#skillList').innerHTML = '';
  skills.forEach(skill => {
    const percent = Math.round(appState.progress[skill.key] / lessons[skill.key].stepCount * 100);
    const row = document.createElement('div');
    const label = document.createElement('span');
    label.textContent = skill.label;
    const track = document.createElement('div');
    track.className = 'skill-track';
    const fill = document.createElement('i');
    fill.style.width = `${percent}%`;
    track.appendChild(fill);
    const value = document.createElement('strong');
    value.textContent = `${percent}%`;
    row.append(label, track, value);
    $('#skillList').appendChild(row);
  });

  const achievements = [
    { name: 'Nét vẽ đầu tiên', detail: 'Hoàn thành bước học đầu tiên', icon: 'pen', unlocked: getCompletedSteps() > 0 },
    { name: 'Hoàn thành một hành tinh', detail: 'Hoàn thành 1 bài học', icon: 'orbit', unlocked: completed >= 1 },
    { name: 'Ngọn lửa khởi đầu', detail: 'Học liên tiếp 3 ngày', icon: 'flame', unlocked: getBestStreak() >= 3 },
    { name: 'Kiến tạo thiên hà', detail: 'Hoàn thành cả 4 bài học', icon: 'trophy', unlocked: completed === 4 }
  ];
  const grid = $('#achievementGrid');
  grid.innerHTML = '';
  achievements.forEach(item => {
    const card = document.createElement('div');
    card.className = `achievement ${item.unlocked ? 'unlocked' : 'locked'}`;
    const badge = document.createElement('span');
    badge.innerHTML = icon(item.unlocked ? item.icon : 'lock');
    const name = document.createElement('strong');
    name.textContent = item.name;
    const detail = document.createElement('small');
    detail.textContent = item.detail;
    card.append(badge, name, detail);
    grid.appendChild(card);
  });
}

function renderAll() {
  renderProfile();
  renderDashboard();
  renderLearning();
  renderGuide();
  renderProgress();
  renderGallery();
}

function navigate(view, updateHash = true) {
  const target = $(`#view-${view}`);
  if (!target) return;
  $$('.view').forEach(section => section.classList.remove('active'));
  target.classList.add('active');
  currentView = view;
  $('#pageTitle').textContent = target.dataset.title;
  document.title = `${target.dataset.title} · ArtCanva`;
  $$('.nav-item[data-view]').forEach(item => item.classList.toggle('active', item.dataset.view === view));
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (updateHash && location.hash !== `#${view}`) history.pushState(null, '', `#${view}`);
  if (view === 'progress') renderProgress();
  if (view === 'studio') requestAnimationFrame(positionOverlays);
}

function closeSidebar() {
  $('#sidebar')?.classList.remove('show');
  $('#sidebarBackdrop')?.classList.remove('show');
}

function openLesson(key) {
  const lesson = lessons[key] || lessons.basics;
  currentLesson = key in lessons ? key : 'basics';
  $('#lessonModalTitle').textContent = lesson.title;
  $('#lessonModalDescription').textContent = lesson.description;
  $('#lessonModalStatus').innerHTML = `<span></span>${lesson.status}`;
  $('#lessonModalDuration').textContent = lesson.duration;
  $('#lessonModalSteps').textContent = `${lesson.stepCount} bước`;
  $('#lessonModalLevel').textContent = lesson.level;
  const outcomes = $('#lessonOutcomes');
  outcomes.innerHTML = '<strong>Bạn sẽ học được</strong>';
  lesson.outcomes.forEach(text => {
    const item = document.createElement('span');
    item.innerHTML = icon('check');
    item.appendChild(document.createTextNode(text));
    outcomes.appendChild(item);
  });
  const progress = appState.progress[currentLesson];
  $('#startLessonButton').innerHTML = `${progress === lesson.stepCount ? 'Học lại bài học' : progress ? 'Tiếp tục bài học' : 'Bắt đầu bài học'}${icon('arrow')}`;
  $('#lessonModal').classList.add('show');
  $('#lessonModal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#startLessonButton').focus(), 50);
}

function closeLesson() {
  $('#lessonModal').classList.remove('show');
  $('#lessonModal').setAttribute('aria-hidden', 'true');
  if (!$('.modal-backdrop.show')) document.body.style.overflow = '';
}

function setStudioLesson(key) {
  currentLesson = key in lessons ? key : 'basics';
  const lesson = lessons[currentLesson];
  currentGuideStep = Math.min(appState.progress[currentLesson], lesson.stepCount - 1);
  $('#studioLessonTitle').textContent = lesson.title;
  $('#studioLessonDescription').textContent = `Bài học · ${lesson.guide}`;
  $('#canvasFileName').textContent = lesson.file;
  renderGuide();
}

function startLesson() {
  closeLesson();
  setStudioLesson(currentLesson);
  navigate('studio');
  showToast(`Đã mở bài “${lessons[currentLesson].title}”.`, 'success');
}

function openSettings() {
  $('#profileNameInput').value = appState.name;
  $('#motionToggle').checked = appState.settings.motion;
  $('#novaToggle').checked = appState.settings.nova;
  $('#reminderToggle').checked = appState.settings.reminder;
  $('#settingsModal').classList.add('show');
  $('#settingsModal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#profileNameInput').focus(), 50);
}

function applyPreferences() {
  document.body.classList.toggle('reduce-motion', !appState.settings.motion);
  document.body.classList.toggle('hide-nova-tips', !appState.settings.nova);
  $('.daily-challenge').hidden = !appState.settings.reminder;
}

function closeSettings() {
  appState.name = $('#profileNameInput').value.trim().slice(0, 30) || 'Người bạn mới';
  appState.settings.motion = $('#motionToggle').checked;
  appState.settings.nova = $('#novaToggle').checked;
  appState.settings.reminder = $('#reminderToggle').checked;
  try { localStorage.setItem('artcanvas-motion', String(appState.settings.motion)); } catch (_) {}
  saveAppState(true);
  applyPreferences();
  renderProfile();
  renderDashboard();
  $('#settingsModal').classList.remove('show');
  $('#settingsModal').setAttribute('aria-hidden', 'true');
  if (!$('.modal-backdrop.show')) document.body.style.overflow = '';
  showToast('Đã lưu cài đặt không gian học.', 'success');
}

function applyMotionSetting(enabled) {
  appState.settings.motion = enabled;
  $('#motionToggle').checked = enabled;
  try { localStorage.setItem('artcanvas-motion', String(enabled)); } catch (_) {}
  saveAppState();
  applyPreferences();
}

function openAssistant() {
  $('#assistantPanel').classList.add('show');
  $('#assistantPanel').setAttribute('aria-hidden', 'false');
  $('#assistantLauncher').style.opacity = '0';
  $('#assistantLauncher').style.pointerEvents = 'none';
  setTimeout(() => $('#assistantInput').focus(), 100);
}

function closeAssistant() {
  $('#assistantPanel').classList.remove('show');
  $('#assistantPanel').setAttribute('aria-hidden', 'true');
  $('#assistantLauncher').style.opacity = '1';
  $('#assistantLauncher').style.pointerEvents = 'auto';
}

function appendNovaMessage(text) {
  const message = document.createElement('div');
  message.className = 'message nova-message';
  message.innerHTML = `<span class="message-avatar">${icon('sparkles')}</span>`;
  const content = document.createElement('div');
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  content.appendChild(paragraph);
  message.appendChild(content);
  $('#assistantMessages').appendChild(message);
  $('#assistantMessages').scrollTop = $('#assistantMessages').scrollHeight;
}

function novaResponse(question) {
  const text = question.toLowerCase();
  if (/mới|bắt đầu|học gì|kiến thức/.test(text)) {
    return 'Với người mới, bạn nên bắt đầu bằng quan sát hình khối, nét thẳng và nét cong. Sau đó hãy học bố cục trước khi đến màu sắc. Mình gợi ý thử bài “Nét vẽ đầu tiên”: vẽ 10 đường thẳng, 10 đường cong và một quả táo chỉ bằng nét phác nhẹ.';
  }
  if (/màu|bảng màu|pha màu/.test(text)) {
    return 'Bạn có thể thử bảng màu “Sao đêm”: tím đậm #17152F, tím #6D52D9, oải hương #B6A4FF, cyan #8DEBFF và vàng sao #FFD18A. Dùng tím đậm làm nền, cyan cho chi tiết xa và vàng sao làm điểm nhấn. Một màu chính nên chiếm khoảng 60% tác phẩm.';
  }
  if (/bố cục|điểm nhấn|cân bằng|trung tâm/.test(text)) {
    return 'Thử quy tắc 1/3: chia tranh thành 9 ô bằng hai đường ngang và hai đường dọc. Đặt chủ thể ở giao điểm thay vì chính giữa, rồi để lại khoảng trống phía ngược với chủ thể. Một vùng tương phản mạnh sẽ trở thành điểm nhấn tự nhiên.';
  }
  if (/lớp|layer/.test(text)) {
    return 'Lớp vẽ giống các tờ giấy trong suốt chồng lên nhau. Bạn nên tách “Nền”, “Phác thảo” và “Màu sắc”. Khi cần sửa màu, hãy chọn đúng lớp chứa màu đó; nhấn biểu tượng con mắt để tạm ẩn và kiểm tra từng phần.';
  }
  if (/công cụ|canvas|bút|cọ|tẩy/.test(text)) {
    return 'Trong phòng vẽ, bạn có cọ vẽ, bút chì, tẩy, đường thẳng, hình chữ nhật, hình tròn, đổ màu và lấy màu. Người mới nên dùng bút chì để phác thảo, cọ cỡ nhỏ cho chi tiết và tẩy để làm sáng. Phím tắt: B là cọ, E là tẩy, P là bút chì.';
  }
  if (/nét|phác|đường/.test(text)) {
    return 'Khi phác thảo, hãy vẽ từ vai chứ không chỉ từ cổ tay, giữ nét nhẹ và dài. Quan sát tổng thể trước, chỉnh chiều dài và góc của hình rồi mới thêm chi tiết. Đừng xóa ngay một nét chưa đúng — hãy vẽ thêm nét điều chỉnh để hình rõ hơn.';
  }
  if (/thử thách|hành tinh|bài học/.test(text)) {
    return 'Thử thách hôm nay là “Vẽ hành tinh của riêng bạn”. Chọn ba màu bạn yêu thích, tạo một hình tròn làm hành tinh và thêm vành hoặc các vệ tinh. Bạn có thể dùng khoảng 15 phút, rồi lưu tác phẩm vào bộ sưu tập.';
  }
  return 'Mình có thể giúp bạn về nét vẽ, màu sắc, bố cục, lớp tranh hoặc cách dùng công cụ. Bạn hãy mô tả điều đang vướng mắc, ví dụ: “Mình không biết làm sao để bức tranh không bị lệch”, và mình sẽ gợi ý từng bước.';
}

function askNova(question) {
  const text = question.trim();
  if (!text) return;
  const userMessage = document.createElement('div');
  userMessage.className = 'message user-message';
  const bubble = document.createElement('div');
  bubble.textContent = text;
  userMessage.appendChild(bubble);
  $('#assistantMessages').appendChild(userMessage);
  $('#assistantMessages').scrollTop = $('#assistantMessages').scrollHeight;
  $('#assistantInput').value = '';
  setTimeout(() => appendNovaMessage(novaResponse(text)), 420);
}

function initSearch() {
  const entries = [
    { title: 'Nét vẽ đầu tiên', type: 'lesson', key: 'basics', icon: 'book' },
    { title: 'Vũ trụ màu sắc', type: 'lesson', key: 'color', icon: 'palette' },
    { title: 'Bố cục & điểm nhấn', type: 'lesson', key: 'composition', icon: 'pen' },
    { title: 'Chiều sâu & phối cảnh', type: 'lesson', key: 'perspective', icon: 'layers' },
    { title: 'Không gian vẽ', type: 'view', key: 'studio', icon: 'pen' },
    { title: 'Bộ sưu tập tác phẩm', type: 'view', key: 'gallery', icon: 'image' },
    { title: 'Tiến độ của tôi', type: 'view', key: 'progress', icon: 'chart' },
    { title: 'Lớp Mỹ thuật 01', type: 'view', key: 'classroom', icon: 'users' }
  ];
  const input = $('#globalSearch');
  const results = $('#searchResults');
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!query) {
      results.classList.remove('show');
      return;
    }
    const matches = entries.filter(entry => entry.title.toLowerCase().includes(query)).slice(0, 5);
    if (!matches.length) {
      results.innerHTML = '<div class="search-empty">Không tìm thấy kết quả phù hợp.</div>';
    } else {
      matches.forEach(entry => {
        const button = document.createElement('button');
        button.className = 'search-result';
        button.innerHTML = icon(entry.icon);
        const label = document.createElement('span');
        label.textContent = entry.title;
        button.appendChild(label);
        button.addEventListener('click', () => {
          results.classList.remove('show');
          input.value = '';
          if (entry.type === 'lesson') openLesson(entry.key);
          else navigate(entry.key);
        });
        results.appendChild(button);
      });
    }
    results.classList.add('show');
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.global-search')) results.classList.remove('show');
  });
}

const canvas = $('#artCanvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
let layers = [];
let activeLayerIndex = 1;
let currentTool = 'brush';
let currentColor = '#7c5cfc';
let brushSize = 12;
let brushOpacity = 1;
let zoom = 1;
let drawing = false;
let startPoint = null;
let lastPoint = null;
let shapeSnapshot = null;
let restoring = false;
let restoreToken = 0;
let historyStates = [];
let historyIndex = -1;
let autosaveTimer = 0;

function makeLayer(name, locked = false) {
  const layerCanvas = document.createElement('canvas');
  layerCanvas.width = canvas.width;
  layerCanvas.height = canvas.height;
  return {
    name,
    locked,
    visible: true,
    opacity: 1,
    canvas: layerCanvas,
    ctx: layerCanvas.getContext('2d', { willReadFrequently: true })
  };
}

function composite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f8f5ef';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  layers.forEach(layer => {
    if (!layer.visible) return;
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    ctx.drawImage(layer.canvas, 0, 0);
    ctx.restore();
  });
}

function drawStarter() {
  const background = layers[0];
  const c = background.ctx;
  const gradient = c.createLinearGradient(0, 0, 1000, 700);
  gradient.addColorStop(0, '#f7f0e8');
  gradient.addColorStop(.55, '#eee7f8');
  gradient.addColorStop(1, '#dce9f0');
  c.fillStyle = gradient;
  c.fillRect(0, 0, 1000, 700);
  c.fillStyle = '#f4bd78';
  c.beginPath();
  c.arc(770, 145, 83, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = 'rgba(137, 111, 189, .09)';
  c.beginPath();
  c.moveTo(0, 520);
  c.bezierCurveTo(180, 420, 280, 510, 430, 465);
  c.bezierCurveTo(650, 400, 800, 475, 1000, 380);
  c.lineTo(1000, 700);
  c.lineTo(0, 700);
  c.closePath();
  c.fill();
  c.strokeStyle = 'rgba(104, 79, 160, .25)';
  c.lineWidth = 4;
  c.lineCap = 'round';
  c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(423, 262);
  c.lineTo(575, 262);
  c.lineTo(596, 311);
  c.bezierCurveTo(632, 370, 640, 457, 621, 503);
  c.bezierCurveTo(604, 544, 392, 544, 375, 503);
  c.bezierCurveTo(356, 457, 364, 370, 402, 311);
  c.closePath();
  c.stroke();
  c.beginPath();
  c.ellipse(499, 263, 76, 16, 0, 0, Math.PI * 2);
  c.stroke();
  c.beginPath();
  c.moveTo(499, 245);
  c.lineTo(499, 133);
  c.moveTo(499, 201);
  c.bezierCurveTo(441, 197, 408, 161, 405, 113);
  c.bezierCurveTo(465, 112, 496, 146, 499, 201);
  c.moveTo(499, 176);
  c.bezierCurveTo(549, 171, 583, 139, 586, 95);
  c.bezierCurveTo(534, 96, 502, 126, 499, 176);
  c.stroke();
  c.fillStyle = '#df8c80';
  c.beginPath();
  c.ellipse(329, 510, 47, 30, -.18, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#8ab6a5';
  c.beginPath();
  c.arc(675, 512, 39, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = 'rgba(98, 76, 143, .17)';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(236, 551);
  c.lineTo(764, 551);
  c.stroke();
}

function captureState() {
  return layers.map(layer => layer.canvas.toDataURL('image/png'));
}

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

async function restoreState(state) {
  if (!state || restoring) return;
  restoring = true;
  const token = ++restoreToken;
  try {
    const images = await Promise.all(state.map(loadImage));
    if (token !== restoreToken) return;
    images.forEach((image, index) => {
      const layer = layers[index];
      if (!layer) return;
      layer.ctx.clearRect(0, 0, canvas.width, canvas.height);
      layer.ctx.drawImage(image, 0, 0);
    });
    composite();
    renderLayers();
  } finally {
    if (token === restoreToken) {
      restoring = false;
      updateHistoryButtons();
    }
  }
}

function resetHistory() {
  historyStates = [captureState()];
  historyIndex = 0;
  updateHistoryButtons();
}

function pushHistory() {
  if (restoring) return;
  historyStates = historyStates.slice(0, historyIndex + 1);
  historyStates.push(captureState());
  if (historyStates.length > 25) historyStates.shift();
  historyIndex = historyStates.length - 1;
  updateHistoryButtons();
  scheduleAutosave();
}

function updateHistoryButtons() {
  const undo = $('[data-action="undo"]');
  const redo = $('[data-action="redo"]');
  if (undo) undo.disabled = historyIndex <= 0 || restoring;
  if (redo) redo.disabled = historyIndex >= historyStates.length - 1 || restoring;
}

function undo() {
  if (historyIndex > 0 && !restoring) {
    historyIndex--;
    restoreState(historyStates[historyIndex]);
  }
}

function redo() {
  if (historyIndex < historyStates.length - 1 && !restoring) {
    historyIndex++;
    restoreState(historyStates[historyIndex]);
  }
}

function scheduleAutosave() {
  const state = $('#autosaveState');
  if (state) state.innerHTML = '<span></span>Đang lưu...';
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => saveProject(true), 1000);
}

function saveProject(silent = false) {
  try {
    localStorage.setItem('artcanvas-project', JSON.stringify({
      layers: layers.map(layer => ({ name: layer.name, locked: layer.locked, visible: layer.visible, opacity: layer.opacity, data: layer.canvas.toDataURL('image/png') })),
      activeLayerIndex,
      savedAt: Date.now()
    }));
    const state = $('#autosaveState');
    if (state) state.innerHTML = '<span></span>Đã lưu trên thiết bị';
    if (!silent) showToast('Tác phẩm đã được lưu trên trình duyệt này.', 'success');
  } catch (_) {
    if (!silent) showToast('Không thể lưu do dung lượng trình duyệt đã đầy.');
  }
}

async function loadProject() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('artcanvas-project') || 'null'); } catch (_) {}
  if (saved && Array.isArray(saved.layers) && saved.layers.length) {
    for (let index = 0; index < saved.layers.length; index++) {
      const data = saved.layers[index];
      if (!layers[index]) layers[index] = makeLayer(data.name || `Lớp ${index + 1}`, Boolean(data.locked));
      layers[index].name = data.name || `Lớp ${index + 1}`;
      layers[index].locked = Boolean(data.locked);
      layers[index].visible = data.visible !== false;
      layers[index].opacity = Number(data.opacity) || 1;
      if (data.data) {
        try {
          const image = await loadImage(data.data);
          layers[index].ctx.drawImage(image, 0, 0);
        } catch (_) {}
      }
    }
    activeLayerIndex = Math.min(saved.activeLayerIndex ?? 1, layers.length - 1);
    if (layers[activeLayerIndex]?.locked || !layers[activeLayerIndex]?.visible) {
      activeLayerIndex = layers.findIndex(layer => !layer.locked && layer.visible);
      if (activeLayerIndex < 0) activeLayerIndex = 0;
    }
  } else {
    drawStarter();
  }
  composite();
  renderLayers();
  resetHistory();
}

function renderLayers() {
  const list = $('#layersList');
  list.innerHTML = '';
  [...layers].reverse().forEach(layer => {
    const index = layers.indexOf(layer);
    const row = document.createElement('div');
    row.className = `layer-row ${index === activeLayerIndex ? 'active' : ''}`;
    row.dataset.layerIndex = index;
    row.innerHTML = `
      <button class="layer-visibility" data-layer-visibility="${index}" aria-label="${layer.visible ? 'Ẩn' : 'Hiện'} lớp">${icon(layer.visible ? 'eye' : 'eye-off')}</button>
      <button class="layer-select" data-layer-select="${index}"><span class="layer-thumb"><i></i></span><span class="layer-name"></span></button>
      ${layer.locked ? `<span class="layer-lock">${icon('lock')}</span>` : '<span style="width:11px"></span>'}
    `;
    $('.layer-name', row).textContent = layer.name;
    list.appendChild(row);
  });
  const active = layers[activeLayerIndex];
  $('#activeLayerLabel').textContent = `Đang vẽ trên ${active?.name || 'Lớp mới'}`;
}

function selectLayer(index) {
  const layer = layers[index];
  if (!layer || layer.locked) {
    showToast('Lớp nền đang được khóa. Hãy chọn một lớp khác để vẽ.');
    return;
  }
  if (!layer.visible) layer.visible = true;
  activeLayerIndex = index;
  renderLayers();
}

function addLayer() {
  if (layers.length >= 6) {
    showToast('ArtCanva hỗ trợ tối đa 6 lớp cho mỗi tranh.');
    return;
  }
  layers.push(makeLayer(`Lớp ${layers.length + 1}`));
  activeLayerIndex = layers.length - 1;
  renderLayers();
  pushHistory();
  showToast('Đã thêm một lớp vẽ mới.', 'success');
}

function clearActiveLayer() {
  const layer = layers[activeLayerIndex];
  if (!layer || layer.locked) {
    showToast('Không thể xóa lớp nền đang khóa.');
    return;
  }
  layer.ctx.clearRect(0, 0, canvas.width, canvas.height);
  composite();
  pushHistory();
  showToast('Đã xóa nội dung lớp đang chọn.', 'success');
}

function setTool(tool) {
  currentTool = tool;
  $$('.tool-button').forEach(button => button.classList.toggle('active', button.dataset.tool === tool));
  const cursors = { brush: 'crosshair', pencil: 'crosshair', eraser: 'cell', line: 'crosshair', rectangle: 'crosshair', circle: 'crosshair', fill: 'cell', eyedropper: 'copy', hand: 'grab' };
  canvas.style.cursor = cursors[tool] || 'crosshair';
}

function setColor(color) {
  currentColor = color.toLowerCase();
  $('#colorPicker').value = currentColor;
  $('#hexValue').textContent = currentColor.toUpperCase();
  $('#brushPreview').style.background = currentColor;
  $$('#paletteLarge button').forEach(button => button.classList.toggle('active', button.dataset.color.toLowerCase() === currentColor));
}

function initPalette() {
  const colors = ['#17152f', '#3a2a6a', '#6d52d9', '#9c85ff', '#d8cbff', '#8debff', '#4cb9d4', '#79c9a6', '#f4d38b', '#f4a261', '#ef7f7a', '#d76da8', '#f8f5ef', '#55536b', '#ffffff'];
  const palette = $('#paletteLarge');
  colors.forEach(color => {
    const button = document.createElement('button');
    button.style.background = color;
    button.dataset.color = color;
    button.title = color.toUpperCase();
    button.setAttribute('aria-label', `Chọn màu ${color}`);
    button.addEventListener('click', () => setColor(color));
    palette.appendChild(button);
  });
  setColor(currentColor);
}

function updateBrushPreview() {
  const preview = $('#brushPreview');
  const size = Math.max(3, Math.min(30, brushSize * .55));
  preview.style.width = `${size}px`;
  preview.style.height = `${size}px`;
  preview.style.opacity = brushOpacity;
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height)
  };
}

function configureStroke(context, tool = currentTool, size = brushSize) {
  context.save();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = currentColor;
  context.fillStyle = currentColor;
  context.lineWidth = tool === 'pencil' ? Math.max(1, size * .42) : tool === 'eraser' ? size * 1.35 : size;
  context.globalAlpha = tool === 'pencil' ? brushOpacity * .5 : brushOpacity;
  context.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';
  return context;
}

function drawMirroredLine(context, from, to, tool, size) {
  configureStroke(context, tool, size);
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  if ($('#symmetryToggle').checked) {
    context.beginPath();
    context.moveTo(canvas.width - from.x, from.y);
    context.lineTo(canvas.width - to.x, to.y);
    context.stroke();
  }
  context.restore();
}

function drawShape(context, from, to, tool) {
  configureStroke(context, tool);
  context.beginPath();
  if (tool === 'line') {
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
  } else if (tool === 'rectangle') {
    context.rect(from.x, from.y, to.x - from.x, to.y - from.y);
  } else if (tool === 'circle') {
    context.arc(from.x, from.y, Math.hypot(to.x - from.x, to.y - from.y), 0, Math.PI * 2);
  }
  context.stroke();
  if ($('#symmetryToggle').checked && tool !== 'line') {
    const mirrored = canvas.width - from.x;
    const mirroredTo = canvas.width - to.x;
    context.beginPath();
    if (tool === 'rectangle') context.rect(mirrored, from.y, mirroredTo - mirrored, to.y - from.y);
    else context.arc(mirrored, from.y, Math.hypot(to.x - from.x, to.y - from.y), 0, Math.PI * 2);
    context.stroke();
  }
  context.restore();
}

function hexToRgb(hex) {
  const value = hex.replace('#', '');
  return { r: parseInt(value.slice(0, 2), 16), g: parseInt(value.slice(2, 4), 16), b: parseInt(value.slice(4, 6), 16), a: 255 };
}

function floodFill(x, y) {
  const layer = layers[activeLayerIndex];
  if (!layer || layer.locked) return;
  x = Math.max(0, Math.min(canvas.width - 1, Math.floor(x)));
  y = Math.max(0, Math.min(canvas.height - 1, Math.floor(y)));
  const image = layer.ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = image.data;
  const start = (y * canvas.width + x) * 4;
  const target = [data[start], data[start + 1], data[start + 2], data[start + 3]];
  const fill = hexToRgb(currentColor);
  const tolerance = 72;
  const matches = index => Math.abs(data[index] - target[0]) + Math.abs(data[index + 1] - target[1]) + Math.abs(data[index + 2] - target[2]) + Math.abs(data[index + 3] - target[3]) <= tolerance;
  if (target[0] === fill.r && target[1] === fill.g && target[2] === fill.b && target[3] === fill.a) return;
  const visited = new Uint8Array(canvas.width * canvas.height);
  const stack = [y * canvas.width + x];
  visited[stack[0]] = 1;
  while (stack.length) {
    const pixel = stack.pop();
    const px = pixel % canvas.width;
    const py = Math.floor(pixel / canvas.width);
    const index = pixel * 4;
    if (!matches(index)) continue;
    data[index] = fill.r;
    data[index + 1] = fill.g;
    data[index + 2] = fill.b;
    data[index + 3] = fill.a;
    const neighbors = [];
    if (px > 0) neighbors.push(pixel - 1);
    if (px < canvas.width - 1) neighbors.push(pixel + 1);
    if (py > 0) neighbors.push(pixel - canvas.width);
    if (py < canvas.height - 1) neighbors.push(pixel + canvas.width);
    neighbors.forEach(next => {
      if (!visited[next]) {
        visited[next] = 1;
        stack.push(next);
      }
    });
  }
  layer.ctx.putImageData(image, 0, 0);
}

function sampleColor(x, y) {
  const pixel = ctx.getImageData(Math.max(0, Math.min(canvas.width - 1, Math.floor(x))), Math.max(0, Math.min(canvas.height - 1, Math.floor(y))), 1, 1).data;
  const hex = `#${[pixel[0], pixel[1], pixel[2]].map(value => value.toString(16).padStart(2, '0')).join('')}`;
  setColor(hex);
  setTool('brush');
  showToast(`Đã lấy màu ${hex.toUpperCase()}.`, 'success');
}

function beginDrawing(event) {
  if (restoring || (event.pointerType === 'mouse' && event.button !== 0)) return;
  const layer = layers[activeLayerIndex];
  if (!layer || layer.locked) {
    showToast('Hãy chọn một lớp chưa khóa để vẽ.');
    return;
  }
  const point = getCanvasPoint(event);
  if (currentTool === 'eyedropper') {
    sampleColor(point.x, point.y);
    return;
  }
  if (currentTool === 'fill') {
    floodFill(point.x, point.y);
    composite();
    pushHistory();
    return;
  }
  if (currentTool === 'hand') {
    drawing = true;
    startPoint = { x: event.clientX, y: event.clientY, scrollLeft: $('#canvasStage').scrollLeft, scrollTop: $('#canvasStage').scrollTop };
    canvas.style.cursor = 'grabbing';
    canvas.setPointerCapture(event.pointerId);
    return;
  }
  drawing = true;
  startPoint = point;
  lastPoint = point;
  $('#canvasHint').style.display = 'none';
  if (['line', 'rectangle', 'circle'].includes(currentTool)) {
    shapeSnapshot = layer.ctx.getImageData(0, 0, canvas.width, canvas.height);
  } else {
    drawMirroredLine(layer.ctx, point, { x: point.x + .01, y: point.y + .01 }, currentTool, brushSize);
    composite();
  }
  canvas.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function moveDrawing(event) {
  if (!drawing || restoring) return;
  const layer = layers[activeLayerIndex];
  if (currentTool === 'hand') {
    const stage = $('#canvasStage');
    stage.scrollLeft = startPoint.scrollLeft - (event.clientX - startPoint.x);
    stage.scrollTop = startPoint.scrollTop - (event.clientY - startPoint.y);
    positionOverlays();
    return;
  }
  const point = getCanvasPoint(event);
  if (['line', 'rectangle', 'circle'].includes(currentTool)) {
    layer.ctx.putImageData(shapeSnapshot, 0, 0);
    drawShape(layer.ctx, startPoint, point, currentTool);
  } else {
    drawMirroredLine(layer.ctx, lastPoint, point, currentTool, brushSize);
  }
  lastPoint = point;
  composite();
  event.preventDefault();
}

function endDrawing(event) {
  if (!drawing) return;
  drawing = false;
  shapeSnapshot = null;
  startPoint = null;
  lastPoint = null;
  if (currentTool === 'hand') canvas.style.cursor = 'grab';
  if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  pushHistory();
}

function positionOverlays() {
  if (!canvas.getBoundingClientRect().width) return;
  const canvasRect = canvas.getBoundingClientRect();
  const stageRect = $('#canvasStage').getBoundingClientRect();
  const left = canvasRect.left - stageRect.left + $('#canvasStage').scrollLeft;
  const top = canvasRect.top - stageRect.top + $('#canvasStage').scrollTop;
  ['#canvasGrid', '#referenceGuide', '#symmetryGuide'].forEach(selector => {
    const element = $(selector);
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    element.style.width = `${canvasRect.width}px`;
    element.style.height = `${canvasRect.height}px`;
  });
}

function setZoom(value) {
  zoom = Math.max(.5, Math.min(2, value));
  canvas.style.transform = `scale(${zoom})`;
  $('#zoomValue').textContent = `${Math.round(zoom * 100)}%`;
  requestAnimationFrame(positionOverlays);
}

function exportArt() {
  composite();
  const link = document.createElement('a');
  link.download = $('#canvasFileName').textContent || 'artcanvas.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('Đã xuất tác phẩm dưới dạng PNG.', 'success');
}

function initCanvas() {
  layers = [makeLayer('Nền', true), makeLayer('Phác thảo'), makeLayer('Màu sắc')];
  canvas.addEventListener('pointerdown', beginDrawing);
  canvas.addEventListener('pointermove', moveDrawing);
  canvas.addEventListener('pointerup', endDrawing);
  canvas.addEventListener('pointercancel', endDrawing);
  canvas.addEventListener('contextmenu', event => event.preventDefault());
  $('#canvasStage').addEventListener('scroll', positionOverlays);
  window.addEventListener('resize', () => requestAnimationFrame(positionOverlays));
  loadProject();
}

function initToolPanel() {
  initPalette();
  $$('.tool-button').forEach(button => button.addEventListener('click', () => setTool(button.dataset.tool)));
  $$('.tool-tab').forEach(button => button.addEventListener('click', () => {
    $$('.tool-tab').forEach(tab => tab.classList.toggle('active', tab === button));
    $$('.tool-tab-content').forEach(panel => panel.classList.toggle('active', panel.dataset.toolPanel === button.dataset.toolTab));
  }));
  $('#brushSize').addEventListener('input', event => {
    brushSize = Number(event.target.value);
    $('#brushSizeValue').textContent = `${brushSize} px`;
    updateBrushPreview();
  });
  $('#brushOpacity').addEventListener('input', event => {
    brushOpacity = Number(event.target.value) / 100;
    $('#brushOpacityValue').textContent = `${event.target.value}%`;
    updateBrushPreview();
  });
  $('#colorPicker').addEventListener('input', event => setColor(event.target.value));
  $('#gridToggle').addEventListener('change', event => {
    $('#canvasGrid').classList.toggle('show', event.target.checked);
    positionOverlays();
  });
  $('#referenceToggle').addEventListener('change', event => {
    $('#referenceGuide').classList.toggle('show', event.target.checked);
    positionOverlays();
  });
  $('#symmetryToggle').addEventListener('change', event => {
    $('#symmetryGuide').classList.toggle('show', event.target.checked);
    positionOverlays();
  });
  $('#layersList').addEventListener('click', event => {
    const visibility = event.target.closest('[data-layer-visibility]');
    if (visibility) {
      const index = Number(visibility.dataset.layerVisibility);
      layers[index].visible = !layers[index].visible;
      if (index === activeLayerIndex && !layers[index].visible) {
        const next = layers.findIndex(layer => layer.visible && !layer.locked);
        activeLayerIndex = next >= 0 ? next : 0;
      }
      renderLayers();
      composite();
      pushHistory();
      return;
    }
    const select = event.target.closest('[data-layer-select]');
    if (select) selectLayer(Number(select.dataset.layerSelect));
  });
  updateBrushPreview();
  $('#referenceGuide').classList.add('show');
  setTool('brush');
}

function createArtworkCard(art) {
  const card = document.createElement('article');
  card.className = 'art-card user-art';
  card.dataset.owner = 'mine';
  card.dataset.artId = art.id;
  card.dataset.favorite = String(appState.favorites.includes(art.id));
  const image = document.createElement('div');
  image.className = 'art-image uploaded-art';
  const img = document.createElement('img');
  img.src = art.data;
  img.alt = art.title;
  image.appendChild(img);
  const info = document.createElement('div');
  info.className = 'art-info';
  const copy = document.createElement('div');
  const title = document.createElement('strong');
  title.textContent = art.title;
  const meta = document.createElement('small');
  const savedDate = new Date(art.createdAt || Date.now());
  meta.textContent = `${art.lesson || 'Tác phẩm cá nhân'} · ${savedDate.toLocaleDateString('vi-VN')}`;
  copy.append(title, meta);
  const favorite = document.createElement('button');
  favorite.type = 'button';
  favorite.className = `icon-button favorite ${card.dataset.favorite === 'true' ? 'active' : ''}`;
  favorite.dataset.action = 'favorite';
  favorite.setAttribute('aria-label', card.dataset.favorite === 'true' ? 'Bỏ yêu thích' : 'Yêu thích');
  favorite.innerHTML = icon('star');
  info.append(copy, favorite);
  card.append(image, info);
  return card;
}

function addArtwork(data, title, lesson) {
  if (appState.artworks.length >= 12) {
    showToast('Bộ sưu tập đã đạt giới hạn 12 tác phẩm trên trình duyệt này.');
    return false;
  }
  const art = {
    id: typeof globalThis.crypto?.randomUUID === 'function' ? globalThis.crypto.randomUUID() : `art-${Date.now()}`,
    title,
    lesson,
    data,
    createdAt: Date.now()
  };
  appState.artworks.unshift(art);
  if (!saveAppState(true)) {
    appState.artworks.shift();
    return false;
  }
  recordActivity(20);
  renderAll();
  return true;
}

function saveArtwork() {
  composite();
  const output = document.createElement('canvas');
  output.width = 800;
  output.height = 560;
  const outputContext = output.getContext('2d');
  outputContext.fillStyle = '#f8f5ef';
  outputContext.fillRect(0, 0, output.width, output.height);
  outputContext.drawImage(canvas, 0, 0, output.width, output.height);
  const title = lessons[currentLesson].title;
  if (addArtwork(output.toDataURL('image/jpeg', .86), title, 'Từ phòng vẽ')) {
    showToast('Đã lưu tác phẩm vào bộ sưu tập và nhận 20 XP.', 'success');
  }
}

function renderGallery() {
  const grid = $('#galleryGrid');
  $$('.user-art', grid).forEach(card => card.remove());
  const samples = $$('.art-card[data-owner="sample"]', grid);
  samples.forEach((card, index) => {
    card.dataset.artId = `sample-${index + 1}`;
    const favorite = appState.favorites.includes(card.dataset.artId);
    card.dataset.favorite = String(favorite);
    const button = $('[data-action="favorite"]', card);
    if (button) {
      button.classList.toggle('active', favorite);
      button.setAttribute('aria-label', favorite ? 'Bỏ yêu thích' : 'Yêu thích');
    }
  });
  const personalGallery = document.createDocumentFragment();
  appState.artworks.forEach(art => personalGallery.appendChild(createArtworkCard(art)));
  grid.insertBefore(personalGallery, grid.firstChild);
  applyGalleryFilter(galleryFilter);
}

function applyGalleryFilter(filter) {
  galleryFilter = filter;
  let count = 0;
  $$('.art-card', $('#galleryGrid')).forEach(card => {
    const show = filter === 'all' || (filter === 'mine' && card.dataset.owner === 'mine') || (filter === 'favorite' && card.dataset.favorite === 'true');
    card.style.display = show ? '' : 'none';
    if (show) count++;
  });
  $('#galleryCount').textContent = `${count} tác phẩm${filter === 'all' ? ` · ${appState.artworks.length} của bạn` : ''}`;
  const empty = $('#galleryEmpty');
  empty.hidden = count > 0;
  $('h2', empty).textContent = filter === 'favorite' ? 'Chưa có tác phẩm yêu thích' : 'Bộ sưu tập đang chờ tác phẩm đầu tiên';
  $('p', empty).textContent = filter === 'favorite' ? 'Nhấn biểu tượng ngôi sao trên một tác phẩm để giữ lại ở đây.' : 'Vẽ trong phòng thực hành rồi chọn “Lưu vào bộ sưu tập”, hoặc tải một bức ảnh lên.';
}

function initGallery() {
  $('#galleryGrid').addEventListener('click', event => {
    const button = event.target.closest('[data-action="favorite"]');
    if (!button) return;
    const card = button.closest('.art-card');
    const id = card.dataset.artId;
    const favorite = !appState.favorites.includes(id);
    if (favorite) appState.favorites.push(id);
    else appState.favorites = appState.favorites.filter(item => item !== id);
    saveAppState(true);
    renderGallery();
    showToast(favorite ? 'Đã thêm vào danh sách yêu thích.' : 'Đã bỏ khỏi danh sách yêu thích.', 'success');
  });
  $$('[data-gallery-filter]').forEach(button => button.addEventListener('click', () => {
    $$('[data-gallery-filter]').forEach(chip => chip.classList.toggle('active', chip === button));
    applyGalleryFilter(button.dataset.galleryFilter);
  }));
  $('#artUpload').addEventListener('change', event => {
    const file = event.target.files[0];
    event.target.value = '';
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Vui lòng chọn một tệp ảnh.');
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      showToast('Ảnh quá lớn. Hãy chọn ảnh nhỏ hơn 4 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const image = await loadImage(reader.result);
        const output = document.createElement('canvas');
        output.width = 1000;
        output.height = 700;
        const context = output.getContext('2d');
        context.fillStyle = '#f8f5ef';
        context.fillRect(0, 0, output.width, output.height);
        const scale = Math.min(output.width / image.width, output.height / image.height);
        const width = image.width * scale;
        const height = image.height * scale;
        context.drawImage(image, (output.width - width) / 2, (output.height - height) / 2, width, height);
        const title = file.name.replace(/\.[^.]+$/, '').slice(0, 50) || 'Tác phẩm tải lên';
        if (addArtwork(output.toDataURL('image/jpeg', .84), title, 'Ảnh tải lên')) {
          galleryFilter = 'mine';
          $$('[data-gallery-filter]').forEach(chip => chip.classList.toggle('active', chip.dataset.galleryFilter === 'mine'));
          renderGallery();
          showToast('Đã thêm tác phẩm vào bộ sưu tập.', 'success');
        }
      } catch (_) {
        showToast('Không thể đọc ảnh này. Hãy thử một tệp JPG hoặc PNG khác.');
      }
    };
    reader.onerror = () => showToast('Không thể đọc tệp ảnh.');
    reader.readAsDataURL(file);
  });
}

function initLearningFilters() {
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    $$('[data-filter]').forEach(chip => chip.classList.toggle('active', chip === button));
    renderLearning();
  }));
}

function initAssistant() {
  $('#assistantForm').addEventListener('submit', event => {
    event.preventDefault();
    askNova($('#assistantInput').value);
  });
}

function handleGuideStep(button) {
  currentGuideStep = Number(button.dataset.step);
  renderGuide();
}

function completeCurrentStep() {
  const lesson = lessons[currentLesson];
  const completed = appState.progress[currentLesson];
  if (completed >= lesson.stepCount) {
    currentGuideStep = 0;
    renderGuide();
    showToast('Bạn có thể xem lại các bước bất cứ lúc nào.');
    return;
  }
  if (currentGuideStep > completed) {
    showToast(`Hãy hoàn thành bước ${completed + 1} trước.`);
    return;
  }
  if (currentGuideStep < completed) {
    showToast('Bước này đã được hoàn thành.');
    return;
  }
  appState.progress[currentLesson]++;
  const finished = appState.progress[currentLesson] === lesson.stepCount;
  recordActivity(finished ? 100 : 25);
  currentGuideStep = Math.min(appState.progress[currentLesson], lesson.stepCount - 1);
  renderAll();
  showToast(finished ? `Chúc mừng! Bạn đã hoàn thành “${lesson.title}” và nhận 100 XP.` : `Đã hoàn thành bước ${currentGuideStep} và nhận 25 XP.`, 'success');
}

function newCanvas() {
  if (historyIndex > 0 && !window.confirm('Tạo tranh mới sẽ thay thế nội dung đang vẽ. Bạn đã xuất hoặc lưu tác phẩm cần giữ lại chưa?')) return;
  layers = [makeLayer('Nền', true), makeLayer('Lớp 1'), makeLayer('Lớp 2')];
  layers[0].ctx.fillStyle = '#ffffff';
  layers[0].ctx.fillRect(0, 0, canvas.width, canvas.height);
  activeLayerIndex = 1;
  composite();
  renderLayers();
  resetHistory();
  setZoom(1);
  $('#canvasFileName').textContent = 'tranh-moi.png';
  saveProject(true);
  showToast('Đã tạo tranh trắng mới.', 'success');
}

async function copyClassCode() {
  try {
    await navigator.clipboard.writeText('ART01');
    showToast('Đã sao chép mã lớp ART01.', 'success');
  } catch (_) {
    showToast('Mã lớp của bạn là ART01.');
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    const field = document.createElement('textarea');
    field.value = text;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    return copied;
  }
}

async function shareSite() {
  const url = new URL(location.href);
  url.hash = '';
  const localPreview = ['localhost', '127.0.0.1'].includes(url.hostname) || url.protocol === 'file:';
  const copied = await copyText(url.href);
  showToast(copied
    ? localPreview ? 'Đã sao chép liên kết xem trước trên máy này. Link công khai sẽ có sau khi đăng.' : 'Đã sao chép liên kết ArtCanva để gửi cho mọi người.'
    : `Liên kết ArtCanva: ${url.href}`, copied ? 'success' : '');
}

function handleAction(action) {
  const actions = {
    'continue-lesson': () => openLesson(getNextLessonKey()),
    'start-challenge': () => {
      setStudioLesson('color');
      navigate('studio');
      showToast('Thử thách: hãy tạo một hành tinh bằng 3 màu yêu thích.', 'success');
    },
    'open-assistant': openAssistant,
    'close-assistant': closeAssistant,
    'open-settings': openSettings,
    'close-settings': closeSettings,
    'close-lesson': closeLesson,
    'save-project': () => saveProject(false),
    'save-artwork': saveArtwork,
    'new-canvas': newCanvas,
    'complete-step': completeCurrentStep,
    'share-site': shareSite,
    'export-art': exportArt,
    undo,
    redo,
    'add-layer': addLayer,
    'clear-layer': clearActiveLayer,
    'zoom-in': () => setZoom(zoom + .25),
    'zoom-out': () => setZoom(zoom - .25),
    'zoom-reset': () => setZoom(1),
    'dismiss-hint': () => { $('#canvasHint').style.display = 'none'; },
    'suggest-palette': () => {
      setColor('#b6a4ff');
      showToast('Đã áp dụng màu oải hương #B6A4FF cho điểm nhấn.', 'success');
    },
    'open-profile': openSettings,
    notifications: () => {
      const studiedToday = Boolean(appState.activity[dateKey()]?.actions);
      const next = lessons[getNextLessonKey()];
      showToast(studiedToday ? `Hôm nay bạn đã học. Bước tiếp theo: “${next.title}”.` : `Bạn chưa học hôm nay. Hãy thử bài “${next.title}”.`);
      $('.notification-button > span')?.remove();
    },
    'copy-class-code': copyClassCode,
    'upload-art': () => $('#artUpload').click()
  };
  if (actions[action]) actions[action]();
}

document.addEventListener('click', event => {
  const view = event.target.closest('[data-view]');
  if (view) {
    navigate(view.dataset.view);
    return;
  }
  const lesson = event.target.closest('[data-lesson]');
  if (lesson) {
    openLesson(lesson.dataset.lesson);
    return;
  }
  const prompt = event.target.closest('[data-prompt]');
  if (prompt) {
    openAssistant();
    askNova(prompt.dataset.prompt);
    return;
  }
  const action = event.target.closest('[data-action]');
  if (action) {
    handleAction(action.dataset.action);
    return;
  }
  const guideStep = event.target.closest('[data-step]');
  if (guideStep) {
    handleGuideStep(guideStep);
    return;
  }
});

$('#menuButton').addEventListener('click', () => {
  $('#sidebar').classList.add('show');
  $('#sidebarBackdrop').classList.add('show');
});
$('#sidebarBackdrop').addEventListener('click', closeSidebar);
$('#startLessonButton').addEventListener('click', startLesson);
$('#motionToggle').addEventListener('change', event => applyMotionSetting(event.target.checked));

$$('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => {
  if (event.target !== backdrop) return;
  if (backdrop.id === 'lessonModal') closeLesson();
  if (backdrop.id === 'settingsModal') closeSettings();
}));

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    $('#globalSearch').focus();
  }
  if (event.key === 'Escape') {
    closeAssistant();
    closeLesson();
    closeSettings();
    closeSidebar();
    $('#searchResults').classList.remove('show');
  }
  if (currentView !== 'studio' || restoring) return;
  const targetTag = event.target.tagName;
  if (['INPUT', 'TEXTAREA'].includes(targetTag)) return;
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
    event.preventDefault();
    if (event.shiftKey) redo(); else undo();
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'y') {
    event.preventDefault();
    redo();
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
    event.preventDefault();
    saveProject(false);
    return;
  }
  const shortcuts = { b: 'brush', p: 'pencil', e: 'eraser', l: 'line', r: 'rectangle', o: 'circle', f: 'fill', i: 'eyedropper', h: 'hand' };
  const tool = shortcuts[event.key.toLowerCase()];
  if (tool && !event.ctrlKey && !event.metaKey) setTool(tool);
  if (event.key.toLowerCase() === 'g' && !event.ctrlKey && !event.metaKey) {
    $('#gridToggle').checked = !$('#gridToggle').checked;
    $('#gridToggle').dispatchEvent(new Event('change'));
  }
});

function restorePreferences() {
  $('#motionToggle').checked = appState.settings.motion;
  $('#novaToggle').checked = appState.settings.nova;
  $('#reminderToggle').checked = appState.settings.reminder;
  applyPreferences();
}

function viewFromHash() {
  const view = location.hash.replace(/^#\/?/, '');
  return $(`#view-${view}`) ? view : 'dashboard';
}

restorePreferences();
initSearch();
initCanvas();
initToolPanel();
initLearningFilters();
initGallery();
initAssistant();
renderAll();
navigate(viewFromHash(), false);

window.addEventListener('popstate', () => navigate(viewFromHash(), false));
window.addEventListener('hashchange', () => navigate(viewFromHash(), false));
window.addEventListener('resize', () => requestAnimationFrame(positionOverlays));
setInterval(() => {
  if (currentView !== 'studio' || document.hidden || $('.modal-backdrop.show')) return;
  recordActivity(0, 30);
  renderDashboard();
  if (currentView === 'progress') renderProgress();
}, 30000);
requestAnimationFrame(positionOverlays);
